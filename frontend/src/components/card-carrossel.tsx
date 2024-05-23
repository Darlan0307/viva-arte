interface CardProps {
  urlImage: string;
}

const CardCarrossel = ({ urlImage }: CardProps) => {
  return (
    <div className="grid place-content-center">
      <img
        src={urlImage}
        alt="imagem do carrossel"
        className="w-full aspect-video max-w-[1000px]"
      />
    </div>
  );
};

export default CardCarrossel;
