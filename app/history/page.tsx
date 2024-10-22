import React from "react";

export default React.forwardRef((props, ref:React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} id="who-we-are" className="py-20 bg-gray-50 text-black">
      <section className="container mx-auto py-6">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-3">
          {/* First part */}
          <div>
            <h1 className="text-7xl font-bold">Who are we?</h1>
            <p className="py-10 mt-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin porttitor magna, nec consequat justo pretium vitae. Vestibulum blandit nisi id nunc ultrices condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam a orci facilisis enim accumsan bibendum in in turpis. Aliquam vulputate, risus ornare aliquet placerat, mi orci fringilla ipsum, eget viverra arcu dui id justo. Maecenas suscipit, velit sit amet tempor varius, dolor ipsum faucibus augue, vitae suscipit libero arcu sed risus. Suspendisse lacinia, ligula ac accumsan posuere, nibh metus sollicitudin tellus, nec eleifend nunc urna at turpis. Mauris sit amet tempor eros, blandit interdum sapien. Cras lobortis iaculis ligula, sed rutrum dui egestas vitae. Pellentesque aliquet risus eget vulputate ultricies. In ultrices massa quis tortor fermentum, vitae consectetur enim porta.
            </p>
          </div>
          {/* Picture */}
          <div>
            <img
              src="https://media.istockphoto.com/id/1418210562/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%8B%E0%B8%B4%E0%B8%A5-capybara-hydrochoerus-hydrochaeris.jpg?s=612x612&w=0&k=20&c=l2udQna5DyljUD-WMyv9WkFdWk9Tgpte8MUbiqPAJo8="
              alt="Picture 1"
            />
          </div>

          {/* Second part */}
          <div className="mt-5">
            <img
              src="https://media.istockphoto.com/id/1418210562/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%9B%E0%B9%88%E0%B8%B2%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%8B%E0%B8%B4%E0%B8%A5-capybara-hydrochoerus-hydrochaeris.jpg?s=612x612&w=0&k=20&c=l2udQna5DyljUD-WMyv9WkFdWk9Tgpte8MUbiqPAJo8="
              alt="Picture 1"
            />
          </div>
          <div>
            <p className="mt-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin porttitor magna, nec consequat justo pretium vitae. Vestibulum blandit nisi id nunc ultrices condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam a orci facilisis enim accumsan bibendum in in turpis. Aliquam vulputate, risus ornare aliquet placerat, mi orci fringilla ipsum, eget viverra arcu dui id justo. Maecenas suscipit, velit sit amet tempor varius, dolor ipsum faucibus augue, vitae suscipit libero arcu sed risus. Suspendisse lacinia, ligula ac accumsan posuere, nibh metus sollicitudin tellus, nec eleifend nunc urna at turpis. Mauris sit amet tempor eros, blandit interdum sapien. Cras lobortis iaculis ligula, sed rutrum dui egestas vitae. Pellentesque aliquet risus eget vulputate ultricies. In ultrices massa quis tortor fermentum, vitae consectetur enim porta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
})