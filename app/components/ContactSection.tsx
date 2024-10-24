import React from "react";

export default React.forwardRef((props, ref:React.ForwardedRef<HTMLElement>) => {
  return (
    <section ref={ref} id="contact-us" className="p-8">
      <h2 className="text-5xl font-bold">CONTACT US</h2>

      <span className="block my-12 text-8xl font-medium">
        Let’s connect and get to know each other
      </span>
    </section>
  );
})
