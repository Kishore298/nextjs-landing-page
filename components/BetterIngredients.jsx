import React from "react";

const BetterIngredients = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-3 text-center mb-8">
            <h2 className="text-lg font-bold text-gray-600 uppercase mb-2">
              Ingredients
            </h2>
            <h1 className="text-4xl font-bold mb-4">Better Ingredients</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Only the best when you choose products offered on our platform - high-quality
              <br />
              ingredients for high-quality products!
            </p>
          </div>
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGyr1Ub8WZiEnrZnTpagVpN9q-s4LC3P9Gg&usqp=CAU",
              title: "Vitamin C",
              description: "Vitamin C as ascorbic acid",
              bgColor: "bg-blue-100",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaudhAVrJFHKCC8O2r3Dkky3dnhdunFfdAOQ&usqp=CAU",
              title: "Vitamin B3",
              description: "Niacin for healthy gut and skin",
              bgColor: "bg-blue-50",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefnr-J402mi8ZhthPiypM46vXic3SShgs0A&usqp=CAU",
              title: "Magnesium",
              description: "Boost energy and support muscle function",
              bgColor: "bg-yellow-100",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2h6OH8PsZ7cWEhnWNd3W9zPfbrhTE8_WL9Q&usqp=CAU",
              title: "Hyaluronic Acid",
              description: "For smooth, supple, and soft skin!",
              bgColor: "bg-pink-100",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSkJtnp8DgpYDgFfwppkzLDH5wW9qh5VeGQ&usqp=CAU",
              title: "Lactobacillus",
              description: "Invigorate your gut microbiome",
              bgColor: "bg-yellow-50",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGyr1Ub8WZiEnrZnTpagVpN9q-s4LC3P9Gg&usqp=CAU",
              title: "Vitamin D",
              description: "Supports bone health and immunity",
              bgColor: "bg-green-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg ${item.bgColor}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[450px] h-48 object-cover mx-auto"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-lg text-slate-900 font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <button className="absolute bottom-4 left-4 font-semibold underline text-slate-900 hover:text-slate-950">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetterIngredients;

