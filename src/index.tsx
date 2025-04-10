export const layout = "layout.html";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <div class="mx-4">
      <section class="md:flex max-w-4xl gap-8 py-32 mx-auto">
        <div class="">
          <div class="rounded-2xl max-w-sm">
            <img
              class="aspect-[1/1] w-full rounded-2xl object-cover animate-fade-up"
              src="/imgs/kevin_carreon.webp"
              alt="Dr. Kevin Carreon"
            />
          </div>
        </div>
        <div class="max-w-md">
          <div class="animate-fade-up animate-delay-200">
            <h1 class="mt-6 text-2xl tracking-tight font-semibold leading-8 text-gray-900">
              Dr. Kevin Carreon
            </h1>
            <h2 class="leading-7 text-gray-500">BMSc D.D.S.</h2>
          </div>
          <p class="mt-4 leading-7 text-gray-600 animate-fade-up animate-delay-500">
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

      <section class="max-w-4xl py-32 -mx-4 sm:mx-auto">
        <div class="rounded-2xl sm:p-8 sm:pt-0 bg-gradient-to-br p-4 from-cyan-100 to-blue-300">
          <div class="flex flex-col sm:flex-row gap-8 justify-between items-center w-full py-12">
            <h2 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl max-w-lg">
              Accepting new patients
            </h2>
          </div>

          <div class="flex flex-col sm:flex-row gap-8 overflow-hidden">
            <iframe
              class="rounded-2xl"
              title="Nebula Dental Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.3470486828774!2d-113.47759748707998!3d53.4265027721972!)2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01e9f51b99eeb%3A0x9c207c3c7a7717b!2sNebula%20Dental%20Clinic!5e0!3m2!1sen!2sca!4v1744304814893!5m2!1sen!2sca"
              width="100%"
              height="300"
              style="border:0;"
              allowFullScreen={false}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <iframe
              class="rounded-2xl"
              title="WEM Dental"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.928809797641!2d-113.63089968707533!3d53.52332827222581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0205a10000001%3A0x8b5abdb29454c394!2sWEM%20Dental!5e0!3m2!1sen!2sca!4v1744304954372!5m2!1sen!2sca"
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
        <h2 class="text-2xl font-semibold leading-8 mb-8">Education</h2>
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
