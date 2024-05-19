import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCarrossel from "./card-carrossel";
// import Autoplay from "embla-carousel-autoplay";

const Carrossel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      // plugins={[
      //   Autoplay({
      //     delay: 2000,
      //   }),
      // ]}
    >
      <CarouselContent>
        <CarouselItem>
          <CardCarrossel />
        </CarouselItem>
        <CarouselItem>
          <CardCarrossel />
        </CarouselItem>
        <CarouselItem>
          <CardCarrossel />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Carrossel;
