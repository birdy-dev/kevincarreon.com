export const layout = "layout.html";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div class="mx-4">
      <section class="md:flex max-w-4xl gap-8 py-16 mx-auto">
        <div class="">
          <div class="rounded-lg max-w-sm">
            <img
              class="aspect-[1/1] w-full rounded-2xl object-cover"
              src="/imgs/kevin_carreon.webp"
              alt="Dr. Kevin Carreon"
            />
          </div>
        </div>
        <div class="max-w-md">
          <h1 class="mt-6 text-lg font-semibold leading-8 text-gray-900">
            Dr. Kevin Carreon
          </h1>
          <h2 class="text-base leading-7 text-gray-600">BMSc D.D.S.</h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Dr. Kevin was born and raised in Edmonton, AB. He went on to pursue
            his education at the University of Alberta completing his Bachelor’s
            of Medical Sciences and subsequently his Doctor of Dental Surgery
            degree. Dr. Kevin believes in the importance of patient education,
            informed decision making, and a gentle touch when practicing
            dentistry. In his spare time, Dr. Kevin loves to dance, DJ and play
            video games.
          </p>
        </div>
      </section>
    </div>
  </>
);
