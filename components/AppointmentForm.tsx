"use client";
import React, { useEffect } from "react";

const AppointmentForm = () => {
  useEffect(() => {
    // Load the form embed script when the component mounts
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-auto my-10">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/D1wWq6kIkz4FBK253VyD"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-D1wWq6kIkz4FBK253VyD" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 0"
        data-height="511"
        data-layout-iframe-id="inline-D1wWq6kIkz4FBK253VyD"
        data-form-id="D1wWq6kIkz4FBK253VyD"
        title="Form 0"
      ></iframe>
    </div>
  );
};

export default AppointmentForm;

