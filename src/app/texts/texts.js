const title = "PAPELERÍA GAME STAR";
const slogan = "Lo que necesitas, al precio que buscas y con el servicio que mereces.";
const email = "papeleriagamestar@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3232368979";

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En PAPELERÍA GAME STAR, ofrecemos una amplia gama de productos de papelería y miscelánea que se adaptan a tus necesidades cotidianas. Ya sea que estés buscando materiales para la escuela, la oficina o simplemente para el hogar, en PAPELERÍA GAME STAR encontrarás lo que necesitas al precio que buscas y con el servicio que mereces. Nos esforzamos por ofrecer productos de alta calidad y una experiencia de compra excepcional para cada cliente."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
