import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const config = {
  api: {
    bodyParser: false, // Stripe needs the raw body for webhook signatures
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Extract customer details
    const customerName = session.customer_details?.name;
    const customerEmail = session.customer_details?.email;
    const customerPhone = session.customer_details?.phone;

    // Build the redirect URL with query parameters
    const redirectUrl = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/success`);
    redirectUrl.searchParams.append("name", customerName || "");
    redirectUrl.searchParams.append("email", customerEmail || "");
    redirectUrl.searchParams.append("phone", customerPhone || "");

    // Redirect to the success page with customer details in the query
    return res.redirect(303, redirectUrl.toString()); // Use 303 for a "see other" redirect
  }

  res.status(400).json({ message: "Unhandled event type" });
}
