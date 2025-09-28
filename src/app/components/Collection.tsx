import React from "react";
import Image from "next/image";
import { ArrowDownRightIcon, ArrowUpLeftIcon } from "@phosphor-icons/react/dist/ssr";
function collection() {


  const collectionItems = [
    {
      id: 1,
      img: '/collection-assets/col-item-1.jpg',
      title: 'collection item 1',
      desc: 'collection 1'
    },
     {
      id: 2,
      img: '/collection-assets/col-item-2.jpg',
      title: 'collection item 1',
      desc: 'collection 1'
    }
  ]
  return (
    <section className="collection-section" id="collection-section">
      <div className="collection-content flex justify-between">
        <div className="content-info flex flex-col justify-between capitalize">
          <div>
              <h1 className="mb-4">art collection</h1>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque
                consequatur non, quasi excepturi vel voluptas. Necessitatibus fuga
                tempora repudiandae. Suscipit numquam officia facere possimus
                deleniti rem magni ea nesciunt magnam accusantium quas dolore, nulla
                voluptatem, impedit minus, dolor consequatur?
              </p>
          </div>
          <div className="arrows flex gap-4"> 
            <div className="border border-white p-4 rounded-full">
                <ArrowUpLeftIcon size={32} />
            </div>
            <div className="border border-white p-4 rounded-full">
              <ArrowDownRightIcon size={32} />
            </div>
          </div>
        </div>
        <div className="colllection-items flex gap-4">
          {collectionItems.map((collection) => {
            return (
              <div className="collection-item" key={collection.id}>
                   <Image src={collection.img} alt="collection item 1" className="object-cover w-[300px] h-[400px]" width={300} height={400} />
                   <div className="collection-item-desc">
                    <h4>{collection.title}</h4>
                    <span>{collection.desc}</span>
                   </div>
              </div>
            )
          }) 

          }
        </div>
      </div>
    </section>
  );
}

export default collection;
