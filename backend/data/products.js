const products = [
  {
    "id": 1,
    "name": "Gold Ring",
    "price": 12000,
    "image": "https://media.istockphoto.com/id/176830145/photo/wedding-rings.jpg?s=612x612&w=0&k=20&c=AeZdAkKLzyCHwQdj4A0GPfwyZumaOJa0Z2jrDt_TRok=",
    "description": "22K Gold Ring"
  },
  {
    "id": 2,
    "name": "Diamond Necklace",
    "price": 45000,
    "image": "https://www.voylla.com/cdn/shop/files/SVCCU20015_MS_grande.jpg?v=1724846177",
    "description": "Elegant diamond necklace"
  },
  {
    "id": 3,
    "name": "Silver Bracelet",
    "price": 3500,
    "image": "https://media.istockphoto.com/id/1178916238/photo/fashion-male-bracelet-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_-kXgdQenOr5r7jjg4Yk_B8EbyBnNdvK0qjc3lqrAsM=",
    "description": "Sterling silver charm bracelet"
  },
  {
    "id": 4,
    "name": "Pearl Earrings",
    "price": 2800,
    "image": "https://thepearlstory.co.in/cdn/shop/files/rn-image_picker_lib_temp_73849d55-2c67-4dca-9e85-aecf9c3bcf1c.jpg?v=1764537104&width=990",
    "description": "Classic pearl stud earrings"
  },
  {
    "id": 5,
    "name": "Gold Chain",
    "price": 15000,
    "image": "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/mRuGLhzNBWSW4vR8r0GT8w129ZE8ZZNX4Gg3eH4k.jpeg",
    "description": "22K gold chain"
  },
  {
    "id": 6,
    "name": "Diamond Ring",
    "price": 30000,
    "image": "",
    "description": "Solitaire diamond ring"
  },
  {
    "id": 7,
    "name": "Bangles Set",
    "price": 5000,
    "image": "https://www.shutterstock.com/image-photo/elegant-gold-diamond-jewelry-set-600nw-2633800493.jpg",
    "description": "Traditional gold bangles set"
  },
  {
    "id": 8,
    "name": "Koki Hair Accessory",
    "price": 1200,
    "image": "",
    "description": "Decorative koki hair accessory"
  },
  {
    "id": 9,
    "name": "Rose Gold Bracelet",
    "price": 4000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyV4fYZO83rIy3Xu_2cLSXZLQIX9uTTDrkOg&s",
    "description": "Rose gold plated bracelet"
  },
  {
    "id": 10,
    "name": "Emerald Earrings",
    "price": 6000,
    "image": "https://img.perniaspopupshop.com/catalog/product/j/b/JBRC102415_1.jpg?impolicy=detailimageprod",
    "description": "Emerald drop earrings"
  },
  {
    "id": 11,
    "name": "Silver Chain",
    "price": 2500,
    "image": "https://t3.ftcdn.net/jpg/01/97/31/70/360_F_197317009_6m2kTBEPc8Wa5WoAmNHZ4pze01GH6CT2.jpg",
    "description": "Sterling silver chain"
  },
  {
    "id": 12,
    "name": "Gold Pendant Necklace",
    "price": 8000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKZFuwiRPcYprgLxOZDe_fcYbaFKy6ai7Vw&s",
    "description": "Gold necklace with pendant"
  },
  {
    "id": 13,
    "name": "Diamond Stud Earrings",
    "price": 15000,
    "image": "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg",
    "description": "Elegant diamond stud earrings"
  },
  {
    "id": 14,
    "name": "Silver Bangles",
    "price": 2200,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFXw-XlO1OWDyfIJYRvNh-FF0vbYGaJ9ARg&s",
    "description": "Set of sterling silver bangles"
  },
  {
    "id": 15,
    "name": "Gold Bracelet",
    "price": 7000,
    "image": "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_4117071_100602_b",
    "description": "22K gold bracelet"
  },
  {
    "id": 16,
    "name": "Ruby Ring",
    "price": 9500,
    "image": "https://media.istockphoto.com/id/513732550/photo/ruby-center-stone-diamond-ring.jpg?s=612x612&w=0&k=20&c=BJ2W0EHqpZ0Z8JMS3gq8mJXlnzV-LL2nOWB9QdGULO0=",
    "description": "Ruby gemstone ring"
  },
  {
    "id": 17,
    "name": "Choker Necklace",
    "price": 4000,
    "image": "https://target.scene7.com/is/image/Target/GUEST_6570dc63-5d0f-4cc7-bb2f-cd4352efba20?wid=300&hei=300&fmt=pjpeg",
    "description": "Stylish choker necklace"
  },
  {
    "id": 18,
    "name": "Gold Earrings",
    "price": 5000,
    "image": "https://2.imimg.com/data2/XV/PX/MY-5689026/4k-white-gold-or-yellow-gold-diamond-heart-earring-h-i1-i2-1-6-ct-tw-1000x1000.jpg",
    "description": "22K gold hoop earrings"
  },
  {
    "id": 19,
    "name": "Silver Pendant",
    "price": 1800,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Fov9i7xUalYrQrtdvuilkiwxk8sas4eNBg&s",
    "description": "Sterling silver pendant"
  },
  {
    "id": 20,
    "name": "Diamond Bracelet",
    "price": 25000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlFnELs1n3A0mCEnse6HM0YBXR6UMFpfF-w&s",
    "description": "Diamond-studded bracelet"
  },
  {
    "id": 21,
    "name": "Gold Nose Ring",
    "price": 2200,
    "image": "https://mortantra.com/cdn/shop/files/TMPNTH44MB.jpg?v=1729511466&width=600",
    "description": "Traditional gold nose ring"
  },
  {
    "id": 22,
    "name": "Silver Anklet",
    "price": 1500,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EjyhRUkti3ryrWA_qW8ICb-o1FiL1Zmq6Q&s",
    "description": "Sterling silver anklet"
  },
  {
    "id": 23,
    "name": "Platinum Ring",
    "price": 35000,
    "image": "https://m.media-amazon.com/images/I/71AgilI5-QL._SL1500_.jpg",
    "description": "Elegant platinum ring"
  },
  {
    "id": 24,
    "name": "Gold Mangalsutra",
    "price": 18000,
    "image": "https://m.media-amazon.com/images/I/51hGVjY9e1L._UL1440_.jpg",
    "description": "Traditional gold mangalsutra"
  },
  {
    "id": 25,
    "name": "Pearl Necklace",
    "price": 12000,
    "image": "https://static.vecteezy.com/system/resources/thumbnails/059/125/552/small/wonderful-classic-pearl-necklace-white-classic-strand-4k-png.png",
    "description": "Classic pearl necklace"
  },
  {
    "id": 26,
    "name": "Silver Earrings",
    "price": 2000,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7D9eZc9k9Ne_cjaWlRWhMafnIbAcLPgZ7A&s",
    "description": "Sterling silver earrings"
  },
  {
    "id": 27,
    "name": "Gold Koki",
    "price": 3000,
    "image": "https://img.freepik.com/free-photo/indian-bride-portrait_23-2151996325.jpg",
    "description": "Gold decorative koki"
  },
  {
    "id": 28,
    "name": "Diamond Bangles",
    "price": 40000,
    "image": "https://www.sanvijewels.com/cdn/shop/files/IMG_20230921_211813.jpg?v=1714048941&width=3000",
    "description": "Diamond-studded bangles"
  },
  {
    "id": 29,
    "name": "Rose Gold Ring",
    "price": 8500,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG35FELNaNWG_Ul3xN-HqB3pS8XT2ggIuAxQ&s",
    "description": "Rose gold ring"
  },
  {
    "id": 30,
    "name": "Silver Bracelet with Charms",
    "price": 3200,
    "image": "https://www.truesilver.co.in/cdn/shop/files/BR107697S7ISL_1_53240d62-4ea2-488c-a9f3-8e596e8e1014.jpg?v=1764570949&width=355",
    "description": "Sterling silver bracelet with charms"
  }
];

export default products;