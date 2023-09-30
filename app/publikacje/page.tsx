const Publikacje = () => {
  return (
    <div>
      <div className="bg-black pt-[82px] lg:pt-[106px]">
        <div className="relative">
          <div className="container">
            <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
              <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left">
                <h4 className="!text-secondary">Moje publikacje</h4>
              </div>
              <div className="top-0 mt-6 right-0 md:mt-0 lg:absolute">
                <img
                  src="/assets/images/blog-detail-hero.png"
                  alt="blog-detail-hero"
                  className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-14 bg-black text-white md:py-[100px]">
        <div className="mt-24 container">
          <div className="prose max-w-full dark:prose-invert">
            <h2 className="text-secondary">Wstęp</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              a provident. Rem adipisci sunt laboriosam? Ipsum sunt alias
              aspernatur vel ullam soluta perferendis. Neque, facilis
              repudiandae veniam reiciendis sapiente odit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              placeat molestiae nam est reiciendis. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque.
            </p>

            <h2 className="text-secondary">List publikacji</h2>
            <ul>
              <li>Vestibulum hendrerit tortor ac rutrum porta.</li>
              <li>Donec gravida elit a auctor luctus.</li>
              <li>Integer iaculis odio id blandit varius.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publikacje;
