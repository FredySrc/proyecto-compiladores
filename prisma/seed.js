import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let data = [
        {
            especialidadNombre: 'Alergología',
        },
        {
            especialidadNombre: 'Anestesiología y reanimación',
        },
        {
            especialidadNombre: 'Aparato digestivo',
        },
        {
            especialidadNombre: 'Cardiología',
        },
         {
            especialidadNombre: 'Endocrinología y nutrición',
        },
         {
            especialidadNombre: 'Hematología y hemoterapia',
        },
         {
            especialidadNombre: 'Medicina de la educación física y del deporte',
        },
         {
            especialidadNombre: 'Medicina espacial',
        },
         {
            especialidadNombre: 'Medicina intensiva',
        },
         {
            especialidadNombre: 'Medicina interna',
        },
         {
            especialidadNombre: 'Medicina preventiva y salud pública',
        },
         {
            especialidadNombre: 'Medicina del trabajo',
        },
    ]

async function main() {
    await prisma.especialidad.createMany({
        data
    })

    data = [{
  usuarioNombre: 'Irma',
  usuarioApellido: 'ialwell0@studiopress.com',
  usuarioCorreo: 'Alwell',
  usuarioContrasena: 'bGAayYh'
}, {
  usuarioNombre: 'Lane',
  usuarioApellido: 'lcattel1@berkeley.edu',
  usuarioCorreo: 'Cattel',
  usuarioContrasena: 'tBMIZkK80ET'
}, {
  usuarioNombre: 'Garret',
  usuarioApellido: 'gbanbrook2@samsung.com',
  usuarioCorreo: 'Banbrook',
  usuarioContrasena: 'T0AlRr'
}, {
  usuarioNombre: 'Lorelei',
  usuarioApellido: 'lcamidge3@aol.com',
  usuarioCorreo: 'Camidge',
  usuarioContrasena: 'EvEONDDF'
}, {
  usuarioNombre: 'Leighton',
  usuarioApellido: 'lhorning4@indiegogo.com',
  usuarioCorreo: 'Horning',
  usuarioContrasena: 'o2RHG9LVq5'
}, {
  usuarioNombre: 'Mehetabel',
  usuarioApellido: 'mbroomer5@scribd.com',
  usuarioCorreo: 'Broomer',
  usuarioContrasena: 'a2vtgy9'
}, {
  usuarioNombre: 'Rickert',
  usuarioApellido: 'rcrissil6@vimeo.com',
  usuarioCorreo: 'Crissil',
  usuarioContrasena: 'XTsFpF5RPtjv'
}, {
  usuarioNombre: 'Patrice',
  usuarioApellido: 'pferreras7@opera.com',
  usuarioCorreo: 'Ferreras',
  usuarioContrasena: '6iZ3KYm25FW'
}, {
  usuarioNombre: 'Irena',
  usuarioApellido: 'ibraunton8@unicef.org',
  usuarioCorreo: 'Braunton',
  usuarioContrasena: 'addztLc8FR2'
}, {
  usuarioNombre: 'Arley',
  usuarioApellido: 'amanilove9@virginia.edu',
  usuarioCorreo: 'Manilove',
  usuarioContrasena: 'k0V2FS'
}, {
  usuarioNombre: 'Valerie',
  usuarioApellido: 'vrudkina@com.com',
  usuarioCorreo: 'Rudkin',
  usuarioContrasena: 'BxZEYB3'
}, {
  usuarioNombre: 'Sidoney',
  usuarioApellido: 'snewellb@fema.gov',
  usuarioCorreo: 'Newell',
  usuarioContrasena: '9Vy1mXo'
}, {
  usuarioNombre: 'Alvina',
  usuarioApellido: 'areddellc@123-reg.co.uk',
  usuarioCorreo: 'Reddell',
  usuarioContrasena: 'buvlbsssXXgw'
}, {
  usuarioNombre: 'Ruthy',
  usuarioApellido: 'roakenfordd@qq.com',
  usuarioCorreo: 'Oakenford',
  usuarioContrasena: 'Y45YTh8'
}, {
  usuarioNombre: 'Zsazsa',
  usuarioApellido: 'zdanniele@com.com',
  usuarioCorreo: 'Danniel',
  usuarioContrasena: 'CUhHdk8TBEm2'
}, {
  usuarioNombre: 'Omero',
  usuarioApellido: 'ogrinyovf@cnn.com',
  usuarioCorreo: 'Grinyov',
  usuarioContrasena: 'vcZjyNn'
}, {
  usuarioNombre: 'Roxana',
  usuarioApellido: 'rbaxandallg@etsy.com',
  usuarioCorreo: 'Baxandall',
  usuarioContrasena: '1SZSfLjJ'
}, {
  usuarioNombre: 'Conny',
  usuarioApellido: 'cstapellsh@hao123.com',
  usuarioCorreo: 'Stapells',
  usuarioContrasena: 'x2ewk8W'
}, {
  usuarioNombre: 'Junina',
  usuarioApellido: 'jhannyi@census.gov',
  usuarioCorreo: 'Hanny',
  usuarioContrasena: '936qZY'
}, {
  usuarioNombre: 'Sherrie',
  usuarioApellido: 'sfoundsj@imageshack.us',
  usuarioCorreo: 'Founds',
  usuarioContrasena: '5zuhm1n'
}, {
  usuarioNombre: 'Marcelline',
  usuarioApellido: 'mmckinnellk@princeton.edu',
  usuarioCorreo: 'McKinnell',
  usuarioContrasena: '9WNjhZaMxXm'
}, {
  usuarioNombre: 'Josephine',
  usuarioApellido: 'jbrownilll@ucoz.com',
  usuarioCorreo: 'Brownill',
  usuarioContrasena: 'ROFRtRra9h'
}, {
  usuarioNombre: 'Athene',
  usuarioApellido: 'akindleysidesm@histats.com',
  usuarioCorreo: 'Kindleysides',
  usuarioContrasena: 'p6vNzN6P6'
}, {
  usuarioNombre: 'Flemming',
  usuarioApellido: 'fsiden@blogger.com',
  usuarioCorreo: 'Side',
  usuarioContrasena: 'qiSZ5YX5Q0hg'
}, {
  usuarioNombre: 'Gabriel',
  usuarioApellido: 'gjohnsono@topsy.com',
  usuarioCorreo: 'Johnson',
  usuarioContrasena: '5Vlz3ewH'
}, {
  usuarioNombre: 'Jeniece',
  usuarioApellido: 'jaxlebyp@comcast.net',
  usuarioCorreo: 'Axleby',
  usuarioContrasena: '9X6GwOfYQI'
}, {
  usuarioNombre: 'Bernard',
  usuarioApellido: 'brenaultq@yellowbook.com',
  usuarioCorreo: 'Renault',
  usuarioContrasena: 'DGvt82A'
}, {
  usuarioNombre: 'Erek',
  usuarioApellido: 'escreaser@google.ca',
  usuarioCorreo: 'Screase',
  usuarioContrasena: 'q68ccQxhqgU'
}, {
  usuarioNombre: 'Shandie',
  usuarioApellido: 'scalvens@ehow.com',
  usuarioCorreo: 'Calven',
  usuarioContrasena: 'b3i1Yt'
}, {
  usuarioNombre: 'Christopher',
  usuarioApellido: 'cgokest@dion.ne.jp',
  usuarioCorreo: 'Gokes',
  usuarioContrasena: 'IuYPLFP'
}, {
  usuarioNombre: 'Quinn',
  usuarioApellido: 'qpoundu@ow.ly',
  usuarioCorreo: 'Pound',
  usuarioContrasena: 'HJBCIAOoeaS'
}, {
  usuarioNombre: 'Vernice',
  usuarioApellido: 'vjolliev@jiathis.com',
  usuarioCorreo: 'Jollie',
  usuarioContrasena: 'Oq3fvfKe0M7u'
}, {
  usuarioNombre: 'Malinde',
  usuarioApellido: 'mbulledw@elegantthemes.com',
  usuarioCorreo: 'Bulled',
  usuarioContrasena: 'STRD0TwBaMWu'
}, {
  usuarioNombre: 'Zea',
  usuarioApellido: 'ztankardx@live.com',
  usuarioCorreo: 'Tankard',
  usuarioContrasena: 'OHj1ph'
}, {
  usuarioNombre: 'Carmel',
  usuarioApellido: 'cclacky@utexas.edu',
  usuarioCorreo: 'Clack',
  usuarioContrasena: 'GA97MFYD'
}, {
  usuarioNombre: 'Aime',
  usuarioApellido: 'adaughtonz@360.cn',
  usuarioCorreo: 'Daughton',
  usuarioContrasena: 'wBrxtEt'
}, {
  usuarioNombre: 'Gwendolyn',
  usuarioApellido: 'gstooders10@multiply.com',
  usuarioCorreo: 'Stooders',
  usuarioContrasena: 'goTO0oSi'
}, {
  usuarioNombre: 'Barbe',
  usuarioApellido: 'bevershed11@house.gov',
  usuarioCorreo: 'Evershed',
  usuarioContrasena: 'sZJ4CId3O'
}, {
  usuarioNombre: 'Lewes',
  usuarioApellido: 'lbrandes12@umn.edu',
  usuarioCorreo: 'Brandes',
  usuarioContrasena: 'KglxArypg'
}, {
  usuarioNombre: 'Donal',
  usuarioApellido: 'dcoupe13@nyu.edu',
  usuarioCorreo: 'Coupe',
  usuarioContrasena: 'PWPon8FV5'
}, {
  usuarioNombre: 'Saundra',
  usuarioApellido: 'searwaker14@ebay.com',
  usuarioCorreo: 'Earwaker',
  usuarioContrasena: 'v4HDC32'
}, {
  usuarioNombre: 'Nicolis',
  usuarioApellido: 'ncapon15@list-manage.com',
  usuarioCorreo: 'Capon',
  usuarioContrasena: 'LSwEMm4sHB'
}, {
  usuarioNombre: 'Merrill',
  usuarioApellido: 'mschouthede16@histats.com',
  usuarioCorreo: 'Schouthede',
  usuarioContrasena: 'BPkbO4YBvo3'
}, {
  usuarioNombre: 'Cristin',
  usuarioApellido: 'cchillingworth17@github.io',
  usuarioCorreo: 'Chillingworth',
  usuarioContrasena: 'fD9McES7K'
}, {
  usuarioNombre: 'Dominick',
  usuarioApellido: 'dcussons18@census.gov',
  usuarioCorreo: 'Cussons',
  usuarioContrasena: 'nIOYQXPO'
}, {
  usuarioNombre: 'Caria',
  usuarioApellido: 'cahlin19@narod.ru',
  usuarioCorreo: 'Ahlin',
  usuarioContrasena: 'sZ8H56fo'
}, {
  usuarioNombre: 'Dudley',
  usuarioApellido: 'dmckerley1a@vkontakte.ru',
  usuarioCorreo: 'McKerley',
  usuarioContrasena: '388OUOwP'
}, {
  usuarioNombre: 'Golda',
  usuarioApellido: 'gpattillo1b@ustream.tv',
  usuarioCorreo: 'Pattillo',
  usuarioContrasena: 'dVIyrC3'
}, {
  usuarioNombre: 'Rubetta',
  usuarioApellido: 'rdesavery1c@sitemeter.com',
  usuarioCorreo: 'de Savery',
  usuarioContrasena: 'JvffFQ'
}, {
  usuarioNombre: 'Lilllie',
  usuarioApellido: 'lstockford1d@latimes.com',
  usuarioCorreo: 'Stockford',
  usuarioContrasena: 'xPLE4dUbJwP'
}, {
  usuarioNombre: 'Niel',
  usuarioApellido: 'ntoke1e@mit.edu',
  usuarioCorreo: 'Toke',
  usuarioContrasena: 'xteJiO'
}, {
  usuarioNombre: 'Aleksandr',
  usuarioApellido: 'abaldinotti1f@dyndns.org',
  usuarioCorreo: 'Baldinotti',
  usuarioContrasena: 'PyzMIW7OO'
}, {
  usuarioNombre: 'Aguste',
  usuarioApellido: 'amonnoyer1g@harvard.edu',
  usuarioCorreo: 'Monnoyer',
  usuarioContrasena: 'TDgyiROzzX5'
}, {
  usuarioNombre: 'Eveleen',
  usuarioApellido: 'ejenkison1h@sina.com.cn',
  usuarioCorreo: 'Jenkison',
  usuarioContrasena: '1tiGvjB'
}, {
  usuarioNombre: 'Diann',
  usuarioApellido: 'dgallen1i@google.co.jp',
  usuarioCorreo: 'Gallen',
  usuarioContrasena: 'j1zYCfAnr6p'
}, {
  usuarioNombre: 'Dorree',
  usuarioApellido: 'ddronsfield1j@51.la',
  usuarioCorreo: 'Dronsfield',
  usuarioContrasena: '2od5Zs'
}, {
  usuarioNombre: 'Wenona',
  usuarioApellido: 'wtern1k@cmu.edu',
  usuarioCorreo: 'Tern',
  usuarioContrasena: '20LMuuSEOdv'
}, {
  usuarioNombre: 'Tedd',
  usuarioApellido: 'transbury1l@squarespace.com',
  usuarioCorreo: 'Ransbury',
  usuarioContrasena: 'qbqd4HvHaniS'
}, {
  usuarioNombre: 'Stefano',
  usuarioApellido: 'sbrecknell1m@discovery.com',
  usuarioCorreo: 'Brecknell',
  usuarioContrasena: 'JBS8Z9XIgWa'
}, {
  usuarioNombre: 'Alon',
  usuarioApellido: 'amcdavid1n@ebay.co.uk',
  usuarioCorreo: 'McDavid',
  usuarioContrasena: 'V5Lj9kCSwXbh'
}, {
  usuarioNombre: 'Morly',
  usuarioApellido: 'mcremer1o@nih.gov',
  usuarioCorreo: 'Cremer',
  usuarioContrasena: 'BDvJRjE03G'
}, {
  usuarioNombre: 'Robbert',
  usuarioApellido: 'rmullord1p@icq.com',
  usuarioCorreo: 'Mullord',
  usuarioContrasena: 'jcflsDuLa'
}, {
  usuarioNombre: 'Frances',
  usuarioApellido: 'fmcvity1q@apple.com',
  usuarioCorreo: 'McVity',
  usuarioContrasena: 'B4Djquo'
}, {
  usuarioNombre: 'Lorry',
  usuarioApellido: 'ljedrys1r@woothemes.com',
  usuarioCorreo: 'Jedrys',
  usuarioContrasena: '7ANwaJ9CiOR'
}, {
  usuarioNombre: 'Lalo',
  usuarioApellido: 'lchelsom1s@eventbrite.com',
  usuarioCorreo: 'Chelsom',
  usuarioContrasena: 'iduJSk'
}, {
  usuarioNombre: 'Christine',
  usuarioApellido: 'cgarham1t@github.io',
  usuarioCorreo: 'Garham',
  usuarioContrasena: 'y1zOqZdJhFy'
}, {
  usuarioNombre: 'Cammie',
  usuarioApellido: 'cthurnham1u@paypal.com',
  usuarioCorreo: 'Thurnham',
  usuarioContrasena: 'ptT6xA'
}, {
  usuarioNombre: 'Jennette',
  usuarioApellido: 'jsea1v@imgur.com',
  usuarioCorreo: 'Sea',
  usuarioContrasena: '3If0T9HlVLw'
}, {
  usuarioNombre: 'Cherish',
  usuarioApellido: 'cbenediktovich1w@domainmarket.com',
  usuarioCorreo: 'Benediktovich',
  usuarioContrasena: 'dLc9nk2F1'
}, {
  usuarioNombre: 'Marisa',
  usuarioApellido: 'mgowanlock1x@irs.gov',
  usuarioCorreo: 'Gowanlock',
  usuarioContrasena: 'FIdUKTkgNha'
}, {
  usuarioNombre: 'Roi',
  usuarioApellido: 'rhinkens1y@issuu.com',
  usuarioCorreo: 'Hinkens',
  usuarioContrasena: 'mBxQP4Ng7hpe'
}, {
  usuarioNombre: 'Merline',
  usuarioApellido: 'mrabat1z@examiner.com',
  usuarioCorreo: 'Rabat',
  usuarioContrasena: 'Z4fSJc'
}, {
  usuarioNombre: 'Linnell',
  usuarioApellido: 'lbohlsen20@liveinternet.ru',
  usuarioCorreo: 'Bohlsen',
  usuarioContrasena: 'GV6WZWdF'
}, {
  usuarioNombre: 'Juliane',
  usuarioApellido: 'jhorick21@google.es',
  usuarioCorreo: 'Horick',
  usuarioContrasena: 'p2LpfrPEYTT'
}, {
  usuarioNombre: 'Hilliary',
  usuarioApellido: 'hkryszka22@amazon.de',
  usuarioCorreo: 'Kryszka',
  usuarioContrasena: '4je79u0Hj'
}, {
  usuarioNombre: 'Rachelle',
  usuarioApellido: 'rphilipsohn23@skyrock.com',
  usuarioCorreo: 'Philipsohn',
  usuarioContrasena: 'md4Lvvc'
}, {
  usuarioNombre: 'Dehlia',
  usuarioApellido: 'dtosney24@ustream.tv',
  usuarioCorreo: 'Tosney',
  usuarioContrasena: 'cJCNs4SGRtJ'
}, {
  usuarioNombre: 'Elmer',
  usuarioApellido: 'eguidone25@nhs.uk',
  usuarioCorreo: 'Guidone',
  usuarioContrasena: '229fhiIA'
}, {
  usuarioNombre: 'Gipsy',
  usuarioApellido: 'gropert26@sun.com',
  usuarioCorreo: 'Ropert',
  usuarioContrasena: 'iyxUmODfQcW'
}, {
  usuarioNombre: 'Michell',
  usuarioApellido: 'mfranckton27@webs.com',
  usuarioCorreo: 'Franckton',
  usuarioContrasena: 'oyRCBhN'
}, {
  usuarioNombre: 'Filip',
  usuarioApellido: 'ffavell28@posterous.com',
  usuarioCorreo: 'Favell',
  usuarioContrasena: '45wUlUm8XK'
}, {
  usuarioNombre: 'Orson',
  usuarioApellido: 'otrivett29@nih.gov',
  usuarioCorreo: 'Trivett',
  usuarioContrasena: 'WIAoEo'
}, {
  usuarioNombre: 'Nolly',
  usuarioApellido: 'naujouanet2a@umn.edu',
  usuarioCorreo: 'Aujouanet',
  usuarioContrasena: 'hgZc9kxE'
}, {
  usuarioNombre: 'Gratia',
  usuarioApellido: 'gprestige2b@usatoday.com',
  usuarioCorreo: 'Prestige',
  usuarioContrasena: 'QjA3H5eM'
}, {
  usuarioNombre: 'Jeniffer',
  usuarioApellido: 'jhonnicott2c@uiuc.edu',
  usuarioCorreo: 'Honnicott',
  usuarioContrasena: 'ojyopCCZev'
}, {
  usuarioNombre: 'Whitby',
  usuarioApellido: 'wcod2d@taobao.com',
  usuarioCorreo: 'Cod',
  usuarioContrasena: 'vDF4DPKMMaaz'
}, {
  usuarioNombre: 'Jarad',
  usuarioApellido: 'jcanner2e@mlb.com',
  usuarioCorreo: 'Canner',
  usuarioContrasena: '5BMUQ15WU'
}, {
  usuarioNombre: 'Carny',
  usuarioApellido: 'ccolton2f@ezinearticles.com',
  usuarioCorreo: 'Colton',
  usuarioContrasena: 'W39eDCMkX'
}, {
  usuarioNombre: 'Haze',
  usuarioApellido: 'hbalasini2g@huffingtonpost.com',
  usuarioCorreo: 'Balasini',
  usuarioContrasena: 'w8TgUfiH'
}, {
  usuarioNombre: 'Lanette',
  usuarioApellido: 'lrobbel2h@com.com',
  usuarioCorreo: 'Robbel',
  usuarioContrasena: 'wvUihH7'
}, {
  usuarioNombre: 'Alastair',
  usuarioApellido: 'apetworth2i@flickr.com',
  usuarioCorreo: 'Petworth',
  usuarioContrasena: 'lHVG4j'
}, {
  usuarioNombre: 'Maddalena',
  usuarioApellido: 'mseckom2j@dailymail.co.uk',
  usuarioCorreo: 'Seckom',
  usuarioContrasena: 'B8jUm7z'
}, {
  usuarioNombre: 'Jeddy',
  usuarioApellido: 'jleach2k@samsung.com',
  usuarioCorreo: 'Leach',
  usuarioContrasena: 'Prk8YFZmMyZ'
}, {
  usuarioNombre: 'De witt',
  usuarioApellido: 'dflockhart2l@wikia.com',
  usuarioCorreo: 'Flockhart',
  usuarioContrasena: 'ZQYRoPTqHCn'
}, {
  usuarioNombre: 'Hamlin',
  usuarioApellido: 'htrillo2m@google.fr',
  usuarioCorreo: 'Trillo',
  usuarioContrasena: 'wAXgRSkcO'
}, {
  usuarioNombre: 'Martie',
  usuarioApellido: 'mhakey2n@is.gd',
  usuarioCorreo: 'Hakey',
  usuarioContrasena: '1VVK9A'
}, {
  usuarioNombre: 'Kristo',
  usuarioApellido: 'kditts2o@phoca.cz',
  usuarioCorreo: 'Ditts',
  usuarioContrasena: 'Xai4KhqGrv'
}, {
  usuarioNombre: 'Durward',
  usuarioApellido: 'dlever2p@symantec.com',
  usuarioCorreo: 'Lever',
  usuarioContrasena: 'fu1kmFSrPok'
}, {
  usuarioNombre: 'Di',
  usuarioApellido: 'damis2q@noaa.gov',
  usuarioCorreo: 'Amis',
  usuarioContrasena: 'GJQCwlCv'
}, {
  usuarioNombre: 'Ashlie',
  usuarioApellido: 'abaradel2r@google.com.br',
  usuarioCorreo: 'Baradel',
  usuarioContrasena: 'OH2tKhy0k'
        }]

    await prisma.usuario.createMany({
        data
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
