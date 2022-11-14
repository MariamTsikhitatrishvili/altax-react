function Footer({ partners }) {
    return (
        <div className="bg-slate-500 py-6 px-52 w-full flex flex-col items-center text-white">
            <div className="flex items-center justify-between mb-24" >
                <img src={process.env.PUBLIC_URL + '/images/extra-logo.svg'} className="" alt="Extra logo" />
                <div className="bg-white h-24 w-1 mx-8">

                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className="font-semibold ">
                        ონლაინ შეძენის შემთხვევაში ეწვიეთ EXTRA.Ge-ს, სადაც განთავსებულია "ვინოვეს" ყველა მოდელი და ისარგებლებთ განსხვავებული პირობებით,
                        მიტანა 24 საათში თბილისში სრულიად <span className="bg-green-400">უფასოდ</span> რეგიონებში 3 დღეში. ასევე შეგიძლიათ
                        ისარგებლოთ VISA-ს და MASTERCARD-ის ფასდაკლებით.
                    </p>
                    <div className="bg-red-600 hover:opacity-70 duration-200 flex items-center gap-2 p-2 cursor-pointer">
                        <img src={process.env.PUBLIC_URL + '/images/cart.svg'} className="w-4" alt="cart" />
                        შეძენა
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <p className="bg-purple-600 p-2 text-bold">
                    "ვინოვეს" პროდუქციის სტენდები განთავსებულია შემდეგ პარტნიორ ობიექტებში
                </p>
                <div className="flex gap-7">
                    {
                        partners.map(partner =>
                            <img src={partner['image URL']} className="w-44 hover:scale-125 duration-200" alt="partner" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer