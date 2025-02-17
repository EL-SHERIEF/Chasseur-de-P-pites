import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    designation: "Directrice Marketing, TechVision",
    content: "Chasseur de Pépites a révolutionné notre approche de la surveillance publicitaire. Grâce à leurs alertes en temps réel, nous avons pu optimiser nos campagnes de manière significative.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Pierre Dubois",
    designation: "PDG, E-Commerce Plus",
    content: "Un outil indispensable pour notre équipe marketing. La plateforme est intuitive et les analyses sont précises. Nous avons augmenté notre ROI publicitaire de 40% en 3 mois.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Marie Laurent",
    designation: "Responsable Digital, Mode Express",
    content: "La qualité du support client est exceptionnelle. L'équipe est réactive et les fonctionnalités de surveillance sont exactement ce dont nous avions besoin pour nos campagnes.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="Ce que disent nos clients"
          paragraph="Découvrez les expériences de nos clients satisfaits qui utilisent nos services au quotidien"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialsData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
