
export interface Address {
    state: string,
    country: string,
    street: string,
    lat: string,
    long: string, 
    zipCode: string,
}

export interface Listing {
    id: number,
    imageURL: string,
    address: Address,
    description: string,
    beds: number,
    bathrooms: number,
    carSpaces: number,
}

const listings: Listing[] = [
    {
        "id": 1,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/cb251c35ddaad80fc111186006755670e810c4070396750c1d86c4583d1c5399/image.jpg",
        "address": {
            "state": "Michigan",
            "country": "United States Minor Outlying Islands",
            "street": "8979 Hoeger Harbor Suite 638",
            "lat": "-7.2704",
            "long": "-26.8844",
            "zipCode": "23807"
        },
        "description": "Libero magni nulla odit. Vero quaerat facere accusantium. Assumenda officiis ea explicabo dicta atque quas. Dolorem harum ab reiciendis ab molestiae amet vitae. Aliquid temporibus aliquid. Aspernatur officiis repellat sapiente rem voluptas exercitationem a quidem.\nMaxime molestiae reprehenderit pariatur voluptatem explicabo maiores excepturi consectetur. Perferendis minima similique. Nihil hic tempora necessitatibus sit cumque aliquid incidunt nisi dolorem. Odit iusto repudiandae magni exercitationem ducimus est asperiores et. Quam ipsam commodi praesentium tempora.\nAccusamus repudiandae eligendi maxime. Natus quasi asperiores ex voluptas. Architecto incidunt itaque distinctio ab nostrum atque quasi. Adipisci blanditiis odit quam repudiandae. Animi illo esse aut et.",
        "beds": 1,
        "bathrooms": 2,
        "carSpaces": 2,
    },
    {
        "id": 2,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/19fcb6ea2b7ace84ddb5146c2c61e61dcbc673f8cfe90591e13a263637ab4a86/image.jpg",
        "address": {
            "state": "California",
            "country": "Algeria",
            "street": "13187 Marcos Lane Apt. 016",
            "lat": "-79.8262",
            "long": "82.7417",
            "zipCode": "86737"
        },
        "description": "Esse labore ex ratione amet aliquam beatae rerum ad. Ab dolor quis quisquam amet. Ex non eos. Laudantium ipsam ut iusto suscipit corporis. Quis quos eaque saepe.\nFugit laudantium consequuntur excepturi vitae quam aperiam itaque. Aperiam quos aliquid tempore similique. Quo vitae dignissimos alias harum incidunt cum. Esse ut sunt veniam. Recusandae consectetur id.\nArchitecto ea repudiandae consequatur quo expedita aspernatur. Repellat minus minus aliquam error quis placeat veniam. Ea maiores blanditiis vel at nam harum natus quaerat veniam. Sit numquam vel nobis accusamus itaque placeat. Provident nobis deserunt rerum quidem voluptates molestias quo.",
        "beds": 4,
        "bathrooms": 1,
        "carSpaces": 2,
    },
    {
        "id": 3,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/c9a6df3a4c59db524f1654685c0ac3666341d5464ba1386138c5f26bb352d994/image.jpg",
        "address": {
            "state": "Vermont",
            "country": "United States Minor Outlying Islands",
            "street": "96436 Collier Crossroad Apt. 507",
            "lat": "-89.9957",
            "long": "142.1037",
            "zipCode": "66895"
        },
        "description": "Accusantium quos animi autem eos ipsa facilis soluta laborum. Perferendis rerum ea adipisci ipsa laboriosam eum. Nostrum explicabo culpa. Soluta quos dolore earum nobis. Tenetur sit molestias inventore ipsam.\nQuas minima adipisci suscipit fugit provident quibusdam. Eveniet est esse voluptas consectetur. Porro magnam consequuntur quaerat. Ipsum minus laudantium error nobis.\nUnde animi officiis nulla inventore quos. Asperiores deleniti accusamus sit tempore reprehenderit mollitia aperiam voluptas. Nobis dicta nemo voluptatum.",
        "beds": 4,
        "bathrooms": 2,
        "carSpaces": 0,
    },
    {
        "id": 4,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/a1d6d402b063d538135bf18ac79f7e243e0418a91d4e567bb14f394c56e4eb4c/image.jpg",
        "address": {
            "state": "Mississippi",
            "country": "Croatia",
            "street": "3716 Tomas Neck Suite 907",
            "lat": "58.8999",
            "long": "-162.6192",
            "zipCode": "01120-7451"
        },
        "description": "Quae amet ut perferendis. Ad natus omnis eveniet dolorem quo quia fuga corporis. Voluptatem enim tenetur vero mollitia aperiam magni illo molestias. Voluptatibus exercitationem itaque iste rerum amet assumenda suscipit dolor. Esse dolore praesentium esse vitae. Sed corporis aliquam quis excepturi voluptas.\nNisi dolorum culpa. Iure iusto nihil ipsa rerum dicta officia quo qui est. Ratione ratione saepe nobis error possimus magni architecto. Distinctio sunt nesciunt ipsum veniam velit eos. Assumenda deleniti sit dolor.\nFacilis ipsa vitae enim officiis maxime vero. Maxime ullam illo expedita. Nobis quaerat ipsum nihil quod commodi libero nesciunt dolorum optio. Adipisci distinctio sunt quis magnam rem. Adipisci sit eaque pariatur voluptatem. Necessitatibus totam quaerat nobis qui et quam.",
        "beds": 2,
        "bathrooms": 3,
        "carSpaces": 1,
    },
    {
        "id": 5,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/ea9ad2f1e3af8795d1c877f77b64c55012d79af19aaf30dcd8760ecc32ef0fbd/image.jpg",
        "address": {
            "state": "Louisiana",
            "country": "Luxembourg",
            "street": "65128 Ottis Forges Apt. 173",
            "lat": "79.6115",
            "long": "16.5118",
            "zipCode": "84464-7056"
        },
        "description": "Officiis eos vitae molestias illo sint quam. Architecto voluptatum a repellat. Tenetur ipsum accusamus magni accusamus provident at error nostrum eligendi.\nMaxime beatae sapiente omnis. Pariatur impedit delectus. Molestias nostrum sunt ab. Aliquam iusto dolor quo vero culpa minima quisquam.\nNesciunt recusandae quas commodi. Dignissimos excepturi facilis ullam dolor accusamus nostrum molestias iste. Provident necessitatibus molestiae.",
        "beds": 3,
        "bathrooms": 1,
        "carSpaces": 2,
    },
    {
        "id": 6,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/0240cc952ca5f8803767eedbd27c4119df8d0359160a859bcb6db765617e5ced/image.jpg",
        "address": {
            "state": "New York",
            "country": "Paraguay",
            "street": "45843 Ernestine Forest Suite 530",
            "lat": "-51.9276",
            "long": "8.3267",
            "zipCode": "08239"
        },
        "description": "Magnam animi labore accusantium ex. Fugit facere dolore accusantium. Molestiae id optio. Itaque deserunt a laborum. Odio maiores qui nostrum error molestiae dicta. Dicta natus perferendis beatae cumque voluptas inventore cumque itaque.\nOdit dolorem minus veritatis neque recusandae explicabo. Et vero saepe tenetur aut vitae. Culpa assumenda deleniti fugit libero ipsum est atque. Maiores mollitia accusamus est. Maiores quo amet est dolor ut itaque.\nDignissimos expedita assumenda. Facilis voluptatibus et officiis eius molestiae commodi nisi. Aperiam commodi pariatur numquam repudiandae culpa. Pariatur maxime nesciunt molestiae qui. Minus exercitationem doloribus assumenda id quae quidem repudiandae commodi. Veritatis qui harum officia ex ipsam odio libero veritatis dicta.",
        "beds": 5,
        "bathrooms": 3,
        "carSpaces": 0,
    },
    {
        "id": 7,
        "imageURL": "https://i2.au.reastatic.net/1110x535-format=webp/92c838121d121a10fc7a6293dfb3861e6b514832cb3edcfb8b9ec4408572c9e1/image.jpg",
        "address": {
            "state": "Arkansas",
            "country": "Brunei Darussalam",
            "street": "56001 Nia Falls Suite 875",
            "lat": "23.2810",
            "long": "118.2369",
            "zipCode": "02168-5469"
        },
        "description": "Iusto eveniet cumque reiciendis harum nesciunt praesentium. Non soluta aspernatur. Quia ipsum recusandae fuga quod debitis asperiores ratione optio. Perspiciatis iusto pariatur nisi laboriosam. Magni labore ipsum. Explicabo nemo porro deleniti.\nIn ducimus repellendus ab eveniet beatae quam sint velit. Quas qui vitae rerum natus accusamus fuga. Optio voluptatibus expedita inventore commodi magnam. Quasi rem voluptatem unde optio. Nesciunt aperiam cumque rerum veritatis sit explicabo. Officia provident recusandae labore sed cupiditate placeat exercitationem ullam.\nFacere occaecati voluptatum deleniti. At saepe rerum dolorum nesciunt ad repellendus. Sunt voluptates molestiae.",
        "beds": 2,
        "bathrooms": 2,
        "carSpaces": 0,
    },
    {
        "id": 8,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/f60c51c1e0010e89f631c919fa4e71d494209b1ce925be5bed61cf2ef0a251c8/image.jpg",
        "address": {
            "state": "Illinois",
            "country": "Tokelau",
            "street": "455 Douglas Knoll Suite 518",
            "lat": "74.5412",
            "long": "-150.9481",
            "zipCode": "99229-8975"
        },
        "description": "Iste cum eos dolores atque labore officia. Ducimus vel accusamus perspiciatis. Non ad ab ipsa veritatis. Vero iusto ipsum facilis ipsum ut explicabo velit. Impedit distinctio dolorum inventore.\nFuga quibusdam in ratione sint. Quis ipsum quae. Reiciendis blanditiis laudantium cumque reprehenderit consectetur. Nulla incidunt molestiae atque.\nNumquam nisi sunt ipsam ipsam molestias odit optio quasi. Mollitia voluptatem eos natus quidem provident facere dignissimos corporis doloremque. Natus laudantium quaerat esse laudantium provident sint ipsum. Ducimus earum alias laudantium incidunt temporibus debitis veniam harum.",
        "beds": 2,
        "bathrooms": 2,
        "carSpaces": 0,
    },
    {
        "id": 9,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/7f3b3cf5f4c98ce7def20b3216e5500850b3111d0463cbc453c3149445fcc9cf/image.jpg",
        "address": {
            "state": "Delaware",
            "country": "Netherlands Antilles",
            "street": "6938 Gorczany Viaduct Apt. 075",
            "lat": "54.5352",
            "long": "-145.0447",
            "zipCode": "18651"
        },
        "description": "Officiis ut iure minima doloremque. Nemo minima ea reiciendis soluta quia natus et. Illo provident earum explicabo tempora accusamus. Quidem quis excepturi suscipit quidem. Eum magni repellendus dolorem atque.\nCupiditate ullam ad fugit enim ipsam perspiciatis ipsum possimus voluptates. Architecto ratione voluptatum ipsum occaecati officia laborum animi. Deleniti temporibus rem suscipit iure eaque tempore. Beatae incidunt provident veniam quidem. Minus asperiores soluta accusantium facilis accusamus illo odit sunt aspernatur. Consequatur sit nulla animi.\nPerferendis quas cupiditate dolorum culpa. Iste dolore placeat. Vero magni ullam. Commodi non modi nostrum magnam perferendis nisi. Quas harum soluta optio pariatur perspiciatis.",
        "beds": 2,
        "bathrooms": 1,
        "carSpaces": 1,
    },
    {
        "id": 10,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/c357bfc9be3b4585064dccb8c07edf0189d05ed45b7efc051a3f9f1910009560/image.jpg",
        "address": {
            "state": "Minnesota",
            "country": "China",
            "street": "5734 Boyer Lights Apt. 612",
            "lat": "72.7480",
            "long": "152.1062",
            "zipCode": "04117"
        },
        "description": "Magni autem aliquam dignissimos maxime sunt recusandae voluptatem facilis nulla. Ex aperiam voluptate possimus totam numquam corporis doloribus. Blanditiis nobis voluptate sint sit. Commodi maiores eos excepturi.\nOdio facilis dicta repellat earum id dicta. Quisquam molestiae ut mollitia velit qui veniam expedita ut nobis. Amet tenetur facilis illo voluptas non veritatis ipsum. Nisi consequatur adipisci commodi fuga hic commodi est beatae quia. Culpa iure dicta dolorem.\nMinus ea ratione quis necessitatibus itaque quis mollitia provident. Asperiores consectetur possimus aut aspernatur rerum. Eaque quasi sint tenetur tenetur amet occaecati doloribus.",
        "beds": 1,
        "bathrooms": 2,
        "carSpaces": 2,
    },
    {
        "id": 11,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/2a36f3e6798ae60addf5008143d082ae26c85a7b2b3c13fba05cb5784ddff889/image.jpg",
        "address": {
            "state": "Louisiana",
            "country": "Seychelles",
            "street": "3359 Aisha Path Suite 080",
            "lat": "6.3726",
            "long": "23.4065",
            "zipCode": "19434"
        },
        "description": "Laborum odit labore praesentium ducimus quis. Ipsa repellat soluta commodi. Officiis id consequuntur numquam. Quod id veritatis. Corporis excepturi dignissimos quod vero dignissimos quasi reiciendis inventore.\nDeleniti tenetur repellat libero rerum maiores a. Consequatur id minus voluptate. Ex eos sunt quae maiores quisquam nulla aliquid necessitatibus tenetur. Sint aperiam tenetur nesciunt ex optio occaecati sed. Quibusdam cum aut harum at minima nemo sequi.\nTempora praesentium nisi ducimus eveniet. Voluptas quia quo odit dolorem officia rerum eaque. Delectus dolores beatae soluta adipisci odio sit esse.",
        "beds": 2,
        "bathrooms": 2,
        "carSpaces": 0,
    },
    {
        "id": 12,
        "imageURL": "https://i2.au.reastatic.net/1110x535-format=webp/a30ee8509f435c6d72f783477325e373714d42b3d95f864bb37ae6f13a209165/image.jpg",
        "address": {
            "state": "Mississippi",
            "country": "Cameroon",
            "street": "11733 Lazaro Radial Apt. 095",
            "lat": "35.1397",
            "long": "44.9679",
            "zipCode": "84166-7630"
        },
        "description": "Corrupti ipsum dolorem culpa praesentium placeat quia veritatis. Autem quidem nostrum porro adipisci ducimus. Pariatur ducimus iste. Modi sunt rem unde quos. Laudantium error quae minus. Doloribus expedita labore optio nobis.\nConsectetur itaque quam placeat odit. Quo dolore facilis quod minima animi quaerat repudiandae tempora quia. Repellendus cumque fuga et sunt. Cupiditate magnam quo voluptatum voluptas quos temporibus dolorem quas. Pariatur mollitia suscipit officia iusto illo tempora tenetur. Pariatur suscipit praesentium cupiditate amet quis.\nHarum distinctio cupiditate nemo tenetur minima ad expedita veritatis ut. Praesentium ipsum exercitationem quibusdam minima deserunt quae modi ut rem. Expedita ipsum nisi rem rem tenetur nemo nobis repudiandae necessitatibus. Ad quibusdam placeat itaque perferendis.",
        "beds": 2,
        "bathrooms": 3,
        "carSpaces": 0,
    },
    {
        "id": 13,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/71629f1385d696c4eb7dc1f0469619f28633c0dde4c2abe2710bc0216c5cdd25/image.jpg",
        "address": {
            "state": "Louisiana",
            "country": "Lao People's Democratic Republic",
            "street": "399 Wuckert Corner Apt. 285",
            "lat": "-27.6053",
            "long": "-66.0946",
            "zipCode": "42858"
        },
        "description": "Voluptate voluptates nulla dolorum. Ea sequi repellendus nobis qui ab quod sunt at a. Eligendi ex temporibus culpa cupiditate in vero magnam ad debitis. Odio ut dolorum nam enim debitis dolorem sunt sed ipsa.\nFacilis sapiente neque dolor a tenetur amet incidunt beatae placeat. Facere fugiat nihil repudiandae enim enim magnam veritatis numquam libero. Libero perspiciatis nostrum nemo similique. Suscipit quae corporis eaque ipsum nisi nobis magni.\nDelectus neque repellat eveniet molestias. Consequatur provident esse quasi rerum laudantium aperiam similique porro nisi. Eveniet pariatur illo dolorum amet nisi. Facilis porro fugiat ipsam quo culpa fugit blanditiis.",
        "beds": 1,
        "bathrooms": 1,
        "carSpaces": 2,
    },
    {
        "id": 14,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/784d8d93f60e58261b679229de3dbde83026f7b5039e34d8d0717a6cca914be8/image.jpg",
        "address": {
            "state": "Arizona",
            "country": "Antarctica (the territory South of 60 deg S)",
            "street": "66675 Winnifred Rapid Suite 002",
            "lat": "61.6640",
            "long": "45.3184",
            "zipCode": "67529"
        },
        "description": "Dignissimos commodi expedita quisquam culpa minus. Non doloribus iure nostrum ut quaerat. Unde fugit quaerat facere quos magni. Officia error ea magni omnis deserunt facere facilis quaerat. Repellat veritatis beatae adipisci qui magnam.\nNam quisquam praesentium eos ea labore. Quam magnam enim nihil itaque eveniet magnam quam hic inventore. Neque consectetur doloribus adipisci velit blanditiis. Assumenda doloremque sint possimus officia repudiandae. Voluptatibus occaecati ducimus cupiditate dolorem laudantium molestiae voluptatibus commodi.\nVitae doloribus quidem facere consequuntur sequi. Itaque ipsam impedit. Enim soluta nesciunt maiores et occaecati quibusdam aliquid officiis. Pariatur sunt iste omnis porro nulla distinctio. Nobis at quisquam provident numquam hic repellat voluptates nihil. Perferendis recusandae nihil nobis quis voluptatem animi iusto modi error.",
        "beds": 3,
        "bathrooms": 2,
        "carSpaces": 1,
    },
    {
        "id": 15,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/01d8b5c1de12ca308641501386445217c701dddf0e16c768d168baa7c1e47bc4/image.jpg",
        "address": {
            "state": "California",
            "country": "Cape Verde",
            "street": "4990 Nader Mills Suite 265",
            "lat": "1.7659",
            "long": "163.4441",
            "zipCode": "73442"
        },
        "description": "Dicta vitae odit ducimus culpa quidem. Perspiciatis fugiat laudantium porro temporibus quasi enim quidem incidunt officiis. Tempore cupiditate nemo. Corporis laboriosam commodi cumque ducimus totam. Id pariatur recusandae vitae quas.\nQuis deleniti facere quas placeat tempora. Cupiditate sed voluptatibus perferendis quo eveniet commodi. Necessitatibus laudantium ratione tempore laboriosam odio. Impedit accusantium quod quas quibusdam error necessitatibus pariatur vitae rem. Laborum pariatur suscipit consequatur exercitationem laudantium necessitatibus veritatis maxime distinctio.\nMollitia eos officiis delectus quia nam corporis maiores. Enim saepe excepturi culpa quis consequatur. Dicta in necessitatibus quisquam nam. Quae esse qui.",
        "beds": 5,
        "bathrooms": 2,
        "carSpaces": 2,
    },
    {
        "id": 16,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/b3d0589ba782045e687e62646e054de2c29ea955ba94d280bade29c51b9372d7/image.jpg",
        "address": {
            "state": "North Dakota",
            "country": "Georgia",
            "street": "692 Kuhlman Locks Suite 315",
            "lat": "6.0147",
            "long": "49.7245",
            "zipCode": "27284-8782"
        },
        "description": "Magni consequuntur consequatur totam libero perspiciatis amet dolorem sed. Repellat reiciendis dicta ducimus aspernatur expedita. Numquam nemo accusantium aliquid facere numquam minus vero. Optio maxime quo sed est consectetur quo non beatae. Aliquid consectetur earum rerum cupiditate eveniet quos dolorem praesentium. Minima occaecati doloribus facere quod placeat provident suscipit.\nIllo amet maiores repellendus veniam excepturi repudiandae minus maxime rerum. Sit omnis exercitationem ea. Accusantium neque repudiandae recusandae omnis quidem aperiam.\nOccaecati necessitatibus incidunt expedita assumenda consectetur doloremque sequi corporis facilis. Atque et at recusandae laborum quisquam. Sequi optio porro sequi necessitatibus voluptate officia nulla ipsum. Maiores pariatur dolorem vitae assumenda. Molestiae natus excepturi. Eligendi accusantium impedit unde.",
        "beds": 5,
        "bathrooms": 1,
        "carSpaces": 2,
    },
    {
        "id": 17,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/17420c2122c213ca7876843da0b181ce34f51def430a4e2d271ec861db76184b/image.jpg",
        "address": {
            "state": "South Carolina",
            "country": "Jersey",
            "street": "88732 Monahan Flat Apt. 269",
            "lat": "-72.1252",
            "long": "-109.8446",
            "zipCode": "34130"
        },
        "description": "Aperiam atque ab fuga. Maiores eaque magni eveniet eius labore nulla beatae itaque ducimus. Quas quis natus ea error. Dicta cupiditate harum aliquam.\nDoloremque amet incidunt. Occaecati distinctio nobis laborum corporis sed. Ex modi tenetur nesciunt sint. Magni iure assumenda vel veritatis distinctio. Cupiditate blanditiis unde laudantium cupiditate vero nemo.\nAtque blanditiis ipsum eius nobis perspiciatis commodi. Magnam ea vel. Officia facere sequi quibusdam excepturi corrupti vitae voluptatibus.",
        "beds": 2,
        "bathrooms": 2,
        "carSpaces": 0,
    },
    {
        "id": 18,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/88f0f99c988d4f1a52e76fa51dc284571bcc5834b78497fcad58c6c7cba57f68/image.jpg",
        "address": {
            "state": "Maine",
            "country": "Saint Barthelemy",
            "street": "93320 Toni Views Apt. 046",
            "lat": "-65.8892",
            "long": "-25.9545",
            "zipCode": "35040-2751"
        },
        "description": "Error corporis quam excepturi cum repudiandae. Officiis ratione dolorum sunt itaque fuga a nobis. Delectus eveniet delectus. Fugiat ullam incidunt. Quam illum aut quam repellat corporis repudiandae. Nisi eaque porro nisi maiores maxime eum ipsam necessitatibus magni.\nMagnam a explicabo ratione a facilis nam. Officiis occaecati quaerat dolorem fugiat temporibus. Soluta nisi earum cupiditate harum. Quisquam nam accusamus eaque sunt hic cum. Aliquid debitis accusantium officia. Repellendus quam enim occaecati ut quam consequatur.\nArchitecto facere nostrum nihil laudantium inventore cum aliquam maiores facilis. Nisi explicabo animi. Praesentium totam nemo officia error aut officiis odit. Provident tempora porro facere ducimus iure aperiam voluptatem aut. Autem excepturi rerum quidem sed.",
        "beds": 1,
        "bathrooms": 1,
        "carSpaces": 1,
    },
    {
        "id": 19,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/32fa36e8965cb4eb81eb4babf2dcf7b7243fde18d025c098488bc34b62480633/image.jpg",
        "address": {
            "state": "Missouri",
            "country": "Afghanistan",
            "street": "595 Marlee Union Apt. 899",
            "lat": "-52.4202",
            "long": "44.5730",
            "zipCode": "70974-3139"
        },
        "description": "Labore ea at neque nam eveniet praesentium quasi voluptates corporis. Sed saepe consectetur soluta exercitationem quia exercitationem. Quisquam enim laboriosam. Omnis neque officiis excepturi voluptate deserunt blanditiis.\nRepellat optio delectus modi consequuntur hic libero corporis eum. Laborum corrupti error qui odio dolor quasi quam neque. Molestiae delectus vel accusamus occaecati laudantium at doloribus illum. Totam quae id error enim consequuntur iste occaecati quasi dolor. Optio ipsa non aliquid eius asperiores. Nobis dolor ex iusto a.\nVel harum voluptatibus ipsum pariatur quos. Error eum enim nisi repellat beatae. Optio aut officia distinctio ab nesciunt ipsum. Praesentium ex accusamus officia ullam accusamus temporibus optio ea.",
        "beds": 4,
        "bathrooms": 1,
        "carSpaces": 2,
    },
    {
        "id": 20,
        "imageURL": "https://i2.au.reastatic.net/800x600-format=webp/ef5084cd70a772e3bebb4339db7a60c0852abafb422c7e457e8718d703730c9f/image.jpg",
        "address": {
            "state": "New Mexico",
            "country": "Cote d'Ivoire",
            "street": "182 Estell Park Apt. 803",
            "lat": "10.6410",
            "long": "52.7257",
            "zipCode": "49418-6114"
        },
        "description": "Assumenda maxime a qui velit quidem cumque eum error. Natus accusantium eveniet atque nobis exercitationem maxime explicabo facilis molestiae. Fugiat neque eveniet consequatur quaerat. Voluptate alias iste ducimus non id est libero.\nError ullam rerum dolores et dolore accusantium suscipit adipisci. Rem tempora incidunt distinctio placeat consequatur aspernatur. Modi cupiditate quia assumenda iste consequatur neque voluptatibus. Voluptatum explicabo voluptate similique ad mollitia doloremque. Rem omnis aspernatur cumque harum pariatur asperiores magni totam ullam. Consequatur architecto aspernatur nemo.\nNostrum commodi aliquid adipisci eos culpa voluptatibus laboriosam eos. Magni deleniti in itaque rem aut animi eveniet laboriosam ullam. Minima distinctio numquam autem quia quibusdam sapiente dicta.",
        "beds": 1,
        "bathrooms": 2,
        "carSpaces": 0,
    }
]

export default listings