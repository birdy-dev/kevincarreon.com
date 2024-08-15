export const layout = "layout.html";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div class="mx-4">
      <section class="md:flex max-w-4xl gap-8 py-24 mx-auto">
        <div class="">
          <div class="rounded-2xl max-w-sm">
            <img
              class="aspect-[1/1] w-full rounded-2xl object-cover"
              src="/imgs/kevin_carreon.webp"
              alt="Dr. Kevin Carreon"
            />
          </div>
        </div>
        <div class="max-w-md">
          <h1 class="mt-6 text-2xl tracking-tight font-semibold leading-8 text-gray-900">
            Dr. Kevin Carreon
          </h1>
          <h2 class="leading-7 text-gray-500">BMSc D.D.S.</h2>
          <p class="mt-4 leading-7 text-gray-600">
            Dr. Kevin was born and raised in Edmonton, AB. He went on to pursue
            his education at the University of Alberta completing his Bachelor's
            of Medical Sciences and subsequently his Doctor of Dental Surgery
            degree. Dr. Kevin believes in the importance of patient education,
            informed decision making, and a gentle touch when practicing
            dentistry. In his spare time, Dr. Kevin loves to dance, DJ, and play
            video games.
          </p>
        </div>
      </section>

      <section class="max-w-4xl py-24 -mx-4 sm:mx-auto">
        <div class="rounded-2xl sm:p-8 sm:pt-0 bg-gradient-to-r from-cyan-200 to-blue-200">
          <div class="flex flex-col sm:flex-row gap-8 justify-between items-center w-full py-12">
            <h2 class="text-center sm:text-right text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl max-w-lg">
              Accepting new patients<br />at Swish Dental
            </h2>

            <div>
              <a
                class="block text-nowrap px-4 py-2 mx-auto sm:mx-0 w-fit rounded-full bg-blue-700 hover:bg-blue-800 text-sm font-semibold text-white transition ease-in-out"
                href="http://www.swishdental.ca/appointment-request"
              >
                Book an appointment
              </a>
            </div>
          </div>

          <div class="rounded-2xl overflow-hidden">
            <iframe
              title="Swish Dental"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9463.717495959905!2d-113.5400032!3d53.630399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a024f8dadf3177%3A0x4183313a817de75a!2sSwish%20Dental!5e0!3m2!1sen!2sca!4v1723410636543!5m2!1sen!2sca"
              width="100%"
              height="300"
              style="border:0;"
              allowFullScreen={false}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section class="max-w-4xl py-24 mx-auto">
        <h2 class="text-2xl font-semibold leading-8 mb-8">
          Education
        </h2>
        <div class="flex flex-col sm:flex-row gap-x-24 gap-y-8">
          <img
            class="object-contain object-top"
            src="/imgs/ua_logo.webp"
            alt="University of Alberta"
            width="250"
          />
          <div class="space-y-4 sm:space-y-8">
            <h3 class="text-sm text-gray-500 tracking-widest">Degrees</h3>
            <div>
              Bachelor of Medical Science at the University of Alberta in 2021
            </div>
            <div>
              Doctor of Dental Surgery at the University of Alberta in 2023
            </div>
            <hr />
            <h3 class="text-sm text-gray-500 tracking-widest">Electives</h3>
            <div>
              Advanced Oral Radiology Elective at the University of Alberta in
              2023
            </div>
            <div>
              Advanced Oral Medicine Elective at the University of Alberta in
              2023
            </div>
          </div>
        </div>
      </section>

      <footer class="py-16" />
    </div>
  </>
);
