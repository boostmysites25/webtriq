import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/UIUX Design.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Chatbots.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Game Development.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+918219912716",
  address: "ABC Street, City, Country",
  email: "connect@webtriq.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Platforms",
    icon: webServiceIcon1,
    description:
      "Architecting sophisticated e-commerce ecosystems that transcend conventional online stores. Our meticulously engineered platforms optimize the customer journey, streamline operational workflows, and implement data-driven strategies that accelerate revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    icon: webServiceIcon2,
    description:
      "Developing immersive social engagement environments that foster authentic community interactions. Our platforms leverage behavioral analytics and intuitive UX design to cultivate meaningful connections, enhance brand advocacy, and drive sustainable audience growth.",
  },
  {
    id: 3,
    title: "Conversion-Optimized Landing Pages",
    icon: webServiceIcon3,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Bespoke Web Solutions",
    icon: webServiceIcon4,
    description:
      "Creating tailored digital environments precisely calibrated to your strategic objectives. Our multidisciplinary approach integrates advanced functionality with distinctive design elements to deliver exceptional user experiences that authentically embody your brand narrative.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Crafting premium iOS experiences through sophisticated Swift and Objective-C implementations. Our engineering methodology emphasizes performance optimization, architectural excellence, and intuitive interaction design to deliver applications that exceed Apple's exacting quality standards.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "Engineering sophisticated Android applications that leverage the platform's extensive capabilities. Our development team excels in both Kotlin and Java implementations, creating performant, scalable solutions that maintain consistency across the diverse Android device ecosystem while adhering to Material Design principles.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Implementing cross-platform excellence through Flutter's advanced framework capabilities. We architect sophisticated applications that maintain native-quality performance while significantly reducing development cycles through strategic code reuse, custom widget development, and platform-specific optimizations.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "Delivering sophisticated multi-platform solutions that maximize development efficiency without compromising user experience. Our hybrid application architecture leverages advanced frameworks to create cohesive experiences across diverse operating systems while maintaining near-native performance and platform-specific design integrity.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Director at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "Webtriq's web development expertise transformed our digital presence completely. Their team created an architecturally sophisticated, performance-optimized platform that perfectly embodies our brand identity while delivering exceptional user engagement metrics.",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Chief Innovation Officer at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "The custom software solution Webtriq engineered for our unique operational challenges has fundamentally transformed our workflow efficiency. Their strategic approach to understanding our business needs resulted in a tailored system that has increased productivity by 47%.",
  },
  {
    id: 3,
    name: "Emily T.",
    position: "Technology Director at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "Webtriq's AI development capabilities have revolutionized our data analytics infrastructure. Their machine learning models deliver predictive insights with remarkable accuracy, enabling us to make strategic decisions with unprecedented confidence. A truly transformative partnership.",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Strategy Lead at Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "The IoT solution implemented by Webtriq has created a seamlessly connected ecosystem across our manufacturing facilities. Their sophisticated architecture design and analytics dashboard provide real-time operational visibility that has optimized our production efficiency by 32%.",
  },
  {
    id: 5,
    name: "Jessica M.",
    position: "Digital Transformation Director at Blockchain Ventures",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "Webtriq's blockchain development expertise delivered a secure, transparent distributed system that has transformed our supply chain verification process. Their implementation of smart contracts has automated complex transactions while establishing unprecedented levels of trust with our partners.",
  },
  {
    id: 6,
    name: "Michael Chen",
    position: "Head of Mobile Strategy at Omnichannel Retail Group",
    img: require("./assets/images/testimonial1.png"),
    desc: "The mobile application Webtriq developed for our retail ecosystem has redefined customer engagement for our brand. Their intuitive interface design and seamless integration with our existing systems resulted in a 63% increase in mobile conversions and exceptional user satisfaction metrics.",
  },
  {
    id: 7,
    name: "Sophia Rodriguez",
    position: "Creative Director at Immersive Entertainment",
    img: require("./assets/images/testimonial2.png"),
    desc: "Webtriq's game development team delivered an immersive, visually stunning experience that exceeded our creative vision. Their technical expertise in optimization ensured flawless performance across platforms, resulting in exceptional player retention and industry recognition.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    link: "/web-development",
    description:
      "Create captivating, performance-optimized websites that showcase your unique brand identity and drive meaningful user engagement.",
    icon: allServiceIcon1,
    detailHeading:
      "Web Development: Crafting Digital Experiences That Inspire Action",
    detailContent: `<p>At Webtriq, we transcend conventional website building to create immersive digital environments engineered for performance. Whether you're an emerging startup establishing your digital footprint or an established enterprise requiring a sophisticated, scalable platform, our web development expertise is precisely calibrated to your specific requirements. Our multidisciplinary team collaborates to deliver:</p>
    <br/>
    <ol>
      <li><b>Bespoke Digital Experiences:</b><br/> We reject templated approaches in favor of custom-crafted solutions that authentically embody your brand identity and strategic objectives.</li>
      <br/>
      <li><b>Performance Engineering:</b> <br/> We meticulously optimize every aspect of your site's architecture to ensure lightning-fast loading times while implementing enterprise-grade security protocols to safeguard your digital assets.</li>
      <br/>
      <li><b>Future-Ready Architecture:</b><br/> Our development approach anticipates growth, building flexible frameworks designed to accommodate expanding traffic volumes and evolving business requirements.</li>
    </ol>
    <br/>
    <br/>
    <p>From sophisticated e-commerce ecosystems to compelling corporate platforms and distinctive portfolio showcases, our web development solutions are engineered to amplify your digital presence and catalyze meaningful user interactions.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    link: "/app-development",
    description:
      "Build intuitive, feature-rich mobile applications for iOS and Android that transform your ideas into seamless digital experiences.",
    icon: allServiceIcon2,
    detailHeading:
      "App Development: Transformative Mobile Solutions for the Digital Age",
    detailContent: `<p>In today's mobile-centric landscape, a strategically designed application can fundamentally differentiate your business offering. At Webtriq, we excel in crafting bespoke mobile experiences that are intuitive, feature-rich, and precisely aligned with your strategic objectives. Our comprehensive app development process encompasses every phase from conceptualization to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 3,
    title: "Custom Software Development",
    description:
      "Develop tailored software solutions that address your unique business challenges and streamline operations for maximum efficiency.",
    icon: allServiceIcon3,
    detailHeading:
      "Custom Software Development: Tailored Solutions for Unique Business Needs",
    detailContent: `<p>Off-the-shelf software often falls short when it comes to addressing the unique challenges and requirements of your business. At Webtriq, we specialize in developing custom software solutions that are specifically designed to meet your exact needs and help you gain a competitive edge. Our custom software development services include:</p>
      <br/>
      <ol>
        <li><b>Comprehensive Needs Analysis:</b><br/>We begin by thoroughly understanding your business processes, challenges, and objectives to ensure our solution addresses your specific requirements.</li>
        <br/>
        <li><b>Scalable Architecture Design:</b> <br/> We create flexible, modular software architectures that can grow and evolve with your business, ensuring long-term value and adaptability.</li>
        <br/>
        <li><b>Integration Capabilities:</b><br/> Our custom solutions seamlessly integrate with your existing systems and third-party applications, creating a unified ecosystem that enhances productivity and data flow.</li>
      </ol>
      <br/>
      <br/>
      <p>From enterprise resource planning systems to specialized industry-specific applications, our custom software solutions are built to optimize your operations, increase efficiency, and drive business growth.</p>`,
  },
  {
    id: 4,
    title: "AI Development",
    description:
      "Leverage advanced AI technologies including machine learning, computer vision, and natural language processing to transform your business operations.",
    icon: allServiceIcon5,
    detailHeading:
      "AI Development: Harnessing Intelligent Technologies for Business Transformation",
    detailContent: `<p>Artificial Intelligence is revolutionizing how businesses operate, make decisions, and engage with customers. At Webtriq, we develop sophisticated AI solutions that help organizations automate processes, gain valuable insights, and create intelligent systems. Our AI development expertise spans multiple domains:</p>
      <br/>
      <ol>
        <li><b>Machine Learning Solutions:</b><br/> We develop predictive models and algorithms that learn from your data to identify patterns, make accurate forecasts, and enable data-driven decision making.</li>
        <br/>
        <li><b>Computer Vision Systems:</b> <br/> Our computer vision solutions enable machines to interpret and understand visual information from the world, automating visual inspection, enhancing security systems, and creating innovative user experiences.</li>
        <br/>
        <li><b>Natural Language Processing (NLP):</b><br/> We build systems that understand, interpret, and generate human language, powering intelligent chatbots, sentiment analysis tools, and automated content generation.</li>
      </ol>
      <br/>
      <br/>
      <p>Our AI development solutions are designed to transform raw data into actionable intelligence, automate complex tasks, and create systems that continuously improve through learning and adaptation.</p>`,
  },
  {
    id: 5,
    title: "IoT Solutions",
    description:
      "Connect devices, gather valuable data, and create smart environments with our comprehensive Internet of Things development services.",
    icon: allServiceIcon4,
    detailHeading: "IoT Solutions: Connecting the Physical and Digital Worlds",
    detailContent: `<p>The Internet of Things (IoT) is transforming how we interact with the physical world, creating unprecedented opportunities for businesses to gather data, automate processes, and enhance user experiences. At Webtriq, we develop comprehensive IoT solutions that connect devices, analyze data, and enable smart decision-making. Our IoT services include:</p>
      <br/>
      <ol>
        <li><b>IoT Architecture Design:</b><br/>We design robust, scalable IoT architectures that connect devices, ensure secure data transmission, and enable efficient data processing and storage.</li>
        <br/>
        <li><b>Smart Device Development:</b> <br/> From sensors and actuators to gateways and controllers, we develop and integrate the hardware components needed to create a complete IoT ecosystem.</li>
        <br/>
        <li><b>IoT Analytics and Dashboards:</b><br/> We build powerful analytics platforms and intuitive dashboards that transform IoT data into actionable insights, enabling real-time monitoring and informed decision-making.</li>
      </ol>
      <br/>
      <br/>
      <p>Whether you're looking to create smart buildings, implement industrial automation, or develop connected consumer products, our IoT solutions help you harness the power of connected devices to drive innovation and efficiency.</p>`,
  },
  {
    id: 6,
    title: "Blockchain Development",
    description:
      "Build secure, transparent, and decentralized applications using cutting-edge blockchain technology for various business use cases.",
    icon: allServiceIcon3,
    detailHeading:
      "Blockchain Development: Secure and Transparent Decentralized Solutions",
    detailContent: `<p>Blockchain technology is revolutionizing how businesses handle transactions, manage supply chains, and ensure data integrity. At Webtriq, we develop blockchain solutions that leverage the power of distributed ledger technology to create secure, transparent, and efficient systems. Our blockchain development services include:</p>
      <br/>
      <ol>
        <li><b>Smart Contract Development:</b><br/>We create self-executing contracts with the terms directly written into code, automating transactions and ensuring they're executed exactly as programmed without intermediaries.</li>
        <br/>
        <li><b>Decentralized Application (DApp) Development:</b> <br/> Our team builds applications that run on a decentralized network, providing enhanced security, transparency, and resistance to censorship or single points of failure.</li>
        <br/>
        <li><b>Private Blockchain Networks:</b><br/> We develop custom blockchain networks for enterprises that require controlled access, high transaction throughput, and specific consensus mechanisms tailored to business needs.</li>
      </ol>
      <br/>
      <br/>
      <p>From financial services and supply chain management to healthcare and digital identity, our blockchain solutions help businesses enhance security, reduce costs, and create new levels of transparency and trust.</p>`,
  },
  {
    id: 7,
    title: "Game Development",
    description:
      "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    icon: allServiceIcon6,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: `<p>Whether you're an indie developer with a fresh idea or a large studio looking to expand your portfolio, we offer comprehensive game development services to bring your vision to life. At Webtriq, we specialize in creating immersive, engaging games for mobile, console, and PC platforms. Our game development services include:</p>
      <br/>
      <ol>
        <li><b>Concept and Story Development:</b><br/>We work with you to develop compelling narratives, unique characters, and engaging gameplay mechanics that keep players coming back.</li>
        <br/>
        <li><b>Multi-Platform Development:</b> <br/> Whether it’s Unity or Unreal Engine, we use the latest tools and technologies to ensure your game runs smoothly on all platforms, including iOS, Android, PC, and consoles.</li>
        <br/>
        <li><b>2D/3D Design and Animation:</b><br/> Our artists and animators create stunning graphics and immersive environments that enhance the gameplay experience.</li>
      </ol>
      <br/>
      <br/>
      <p>From mobile games to AAA titles, we are committed to delivering high-quality games that resonate with players and stand out in the market.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
