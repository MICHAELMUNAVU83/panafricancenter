import React from "react";

function About() {
  return (
    <section id="about">
      <div className="bg-[#219D80] py-8 about-text__color w-full">
        <div className="flex justify-center py-6">
          <p className="bg-[#A90100] h-[2px] w-[100px]" />
        </div>

        <div className="flex-col josefin-sans-regular text-[22px] justify-center space-y-10  px-5 text-sm lg:text-lg lg:mx-40 ">
          <h1 className="text-center text-[32px] libre-baskerville-regular">
            About Us
          </h1>

          <p>
            The Center for Pan African Affairs (CPAA) is a potent and dynamic
            network dedicated to advancing Africa's unity and prosperity through
            the enduring principles of Pan Africanism. As a leading hub for
            innovation, strategic development, and impactful action, CPAA is
            committed to fostering the Pan African vision by prioritizing
            citizen-centered approaches.
          </p>

          <p>
            CPAA is deeply rooted in the African Union’s Agenda 2063, the
            continent’s strategic framework for socio-economic transformation.
            The organization aligns its activities with the goals of Agenda
            2063, particularly in areas such as peace and security, economic
            growth, and cultural renaissance.
          </p>

          <p>
            CPAA collaborates with a wide range of partners, including
            governments, academic institutions, civil society organizations, and
            international agencies, to amplify its impact and reach. These
            partnerships are crucial in ensuring the successful implementation
            of CPAA’s mission and vision.
          </p>

          <p>
            We are at the forefront of efforts to unify and uplift Africa and
            its diaspora. Through strategic innovation, collaboration, and a
            steadfast commitment to Pan Africanism, CPAA is driving the
            continent towards a future of collective strength, shared progress,
            and lasting peace.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
