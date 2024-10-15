import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"] as string;
  const buf = await buffer(req);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_SECRET_KEY!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerName = session.customer_details?.name;
    const customerEmail = session.customer_details?.email;
    const customerPhone = session.customer_details?.phone;
    // const receiptEmail = session.receipt_email;

    console.log("Customer Details:", {
      customerName,
      customerEmail,
      customerPhone,
      //   receiptEmail,
    });
    return res.status(200).json({
      message: "Webhook received",
      customerDetails: { customerName, customerEmail, customerPhone },
    });
  } else {
    console.warn(`Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
}

export default POST;
