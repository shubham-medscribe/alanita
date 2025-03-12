import OurLocation from "@/app/components/OurLocations/OurLocation";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageView from "@/app/components/PageView/PageView";

type policy = {
  heading: string;
  desc?: string;
  items?: Array<{
    title: string;
    desc: string;
  }>;
};

export default function page() {
  const privacyPolicyData = [
    {
      heading: "How We Collect Your Information",
      items: [
        {
          title: "Collection",
          desc: "We collect and store the information directly from the individuals through the e-mail and the data provided on the Alanita Travel Platform.",
        },
        {
          title: "Communications",
          desc: "Your contact information provided will be used to communicate with you (via e-mail, phone, through the Alanita Travel Platform). When you communicate with us, we may maintain a record of your communication. By disclosing your contact information to Alanita Travel, you consent to our use of your contact information to communicate with you.",
        },
        {
          title: "Activity Information",
          desc: "We use cookies, log files, pixel tag and other tracking technologies to automatically collect information about your activities, such as your searches, page views and other information about your use of the Alanita Travel Platform. We also collect and may store information that your computer or mobile device provides to us in connection with your use of the Alanita Travel Platform such as your browser type, type of computer or mobile device, browser language, IP address, location and requested & referring URL’s.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      desc: "Alanita Travel utilizes the information, which we collect for the following purposes:",
      items: [
        {
          title: "Provide our Services",
          desc: "To provide you with the services, which we offer on the Alanita Travel Platform and communicate with you about your information usage.",
        },
        {
          title: "Personalization",
          desc: "To tailor the content best suitable to display the information based on your activity on the Alanita Travel Platform.",
        },
        {
          title: "Advertising",
          desc: "To display interest-based advertising to you in the Alanita Travel Platform.",
        },
        {
          title: "Marketing and Promotion",
          desc: "For marketing and promotional purposes, such as to send you news and newsletters, special offers, and promotions.",
        },
        {
          title: "Analytics",
          desc: "To gather metrics to better understand how users access and use the Alanita Travel Platform.",
        },
        {
          title: "Comply with Law",
          desc: "To comply with legal obligations, as part of our general business operations.",
        },
        {
          title: "Prevent Misuse",
          desc: "Where we believe necessary to investigate, prevent or take action regarding illegal activities.",
        },
      ],
    },
    {
      heading: "How We Share Your Information",
      desc: "We do not share your personal data to any third party vendors or suppliers for marketing and its related purposes.",
      items: [
        {
          title: "Affiliates",
          desc: "The information collected about you may be accessed by or shared with subsidiaries and affiliates of Alanita Travel Inc.",
        },
        {
          title: "Legally Required",
          desc: "We may disclose your information, if we are required to do so by law.",
        },
        {
          title: "Protection of Rights",
          desc: "We may disclose information where we believe it necessary to respond to claims asserted against us or comply with legal process.",
        },
      ],
    },
    {
      heading: "How We Protect Your Information",
      desc: "The security of your information is important to us. Alanita Travel has implemented highest industry standards to safeguard and protect the information which we collect.",
      items: [
        {
          title: "Emails, Text Messages and Communications",
          desc: "When you subscribe on the Alanita Travel Platform, you will receive the Alanita Travel digest containing content that we believe may match your interests.",
        },
      ],
    },
    {
      heading: "Cookies, Pixels and Tracking",
      desc: "We and our third-party providers use cookies and other mechanisms to automatically collect and record information about your usage and browsing activities.",
      items: [
        {
          title: "Cookies",
          desc: "These are small files with a unique identifier that are transferred to your browser through our websites.",
        },
        {
          title: "Pixels, web beacons, clear GIF’s",
          desc: "These are tiny graphics with a unique identifier used to track the online movements of users of the Alanita Travel Platform.",
        },
        {
          title: "Analytics Tools",
          desc: "We may use internal and third party analytics tools, including Google Analytics.",
        },
      ],
    },
    {
      heading: "Alanita Travel Ads and Personalization",
      desc: "We may display personalized content and Ads based on the information that we have collected via the Alanita Travel Platform and through our Pixels, widgets, and buttons embedded on third party sites. Users of our Ad Services may also provide us with information as part of their ad campaigns, including customer list information (e.g., email addresses and demographic or interest data or) with us in order to create customized audiences for their ad campaigns; we only use this information to facilitate the particular user’s campaign (including ad metrics and reporting to that user) or for fraud detection and security purposes, and we do not disclose these customer lists to third parties (other than our service providers) unless required by law. We also do not disclose to users of our Ad Services the names or identities of their customers that were successfully reached as part of such campaigns.\n We may also work with third parties such as network advertisers to serve ads on the Alanita Travel Platform and on third-party websites or other social networking platforms such as Google Ad Sense, Facebook Audience Network. These third parties may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs and other tracking technologies to measure the effectiveness of their ads and to personalize advertising content to you.",
    },
    {
      heading: "Transferring Your Data",
      desc: "Alanita Travel is headquartered in the United States and has operations, entities and service providers in the United States and throughout the world. As such, we and our service providers may transfer your personal information to, or access it in, jurisdictions (including the United States) that may not provide equivalent levels of data protection as your home jurisdiction.",
    },
    {
      heading: "Links to Other Websites",
      desc: "The Alanita Travel Platform may contain links to third party sites or online services. We are not responsible for the practices of such third parties, whose information practices are subject to their own policies and procedures, not to this Privacy Policy.",
    },
    {
      heading: "Your California Privacy Rights",
      desc: "California law permits the users of California residents to request and obtain the removal of content or information they had supplied to us. Your request should include a detailed description of the specific content or the information to be removed. Please be aware that your request does not guarantee complete or comprehensive removal of content and information, whereas the law may not permit or due to an irrevocable technical faulty in removal-of-data under certain unavoidable circumstances. \n If you are a California resident and would like to request this information, please submit your request in an email to alanita@alanitatravel.net",
    },
  ];

  return (
    <>
      <PageView title={"Privacy Policy"} content={"Home | Privacy Policy"} />
      <div className="w-full flex justify-center text-[#777984] font-inter p-5">
        <div className="w-[1347px] ">
          <div className="space-y-2">
            <h1 className="font-garamond font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#17233e]">
              Airlines Rules & Restrictions
              <span className="text-red-600">&nbsp;Alanita Travel</span>
            </h1>
            <p>
            <span className="font-bold">Alanita Travel</span>&nbsp;{"recognizes that your privacy is very important to us. This Privacy Policy describes our policies and procedures on the collection, usage, disclosure, handling and sharing of your personal information or personal data when you use the Alanita Travel Platform. This Privacy Policy applies to activities by Alanita Travel Inc., and its affiliates and subsidiaries (collectively “Alanita Travel,” “we” or “us”)."}
            </p>
            <div className="space-y-3 text-[#777984]">
              {privacyPolicyData.map((policy: policy, index: number) => (
                <div key={index} className="space-y-1">
                  <h1 className="underline text-[#17233e] font-bold font-garamond text-base sm:text-lg lg:text-xl xl:text-2xl">
                    {policy.heading}
                  </h1>
                  {policy.desc && (
                    <p>
                      {(policy.desc ?? "").split("\n").map((line:string, index:number) => (
                        <span key={index}>
                          {line}
                          {index <
                            (policy.desc ?? "").split("\n").length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </p>
                  )}

                  {policy.items && (
                    <ul className="space-y-1">
                      {policy.items.map(
                        (rule: Record<string, string>, itemIndex: number) => (
                          <li key={itemIndex}>
                            <span className="text-[#17233e]">
                              <FontAwesomeIcon
                                className="text-red-600"
                                icon={faJetFighter}
                              />{" "}
                              <span className="font-bold">
                                {" "}
                                {rule.title + ":"}
                              </span>
                            </span>
                            &nbsp;
                            <span>{rule.desc}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-3 text-[#777984]">
              <div className="space-y-1">
                <h1 className="underline text-[#17233e] font-bold font-garamond text-base sm:text-lg lg:text-xl xl:text-2xl">
                  {"Contact Us"}
                </h1>
                <p>
                  If you have any questions or grievances about our practices or
                  this Privacy Policy, please contact us at&nbsp;
                  <span className="font-bold hover:text-red-600 transition-all duration-200 cursor-pointer">
                    <a href="mailto:alanita@alanitatravel.net">
                      alanita@alanitatravel.net
                    </a>
                  </span>{" "}
                  or send mail to:
                </p>
                <p className="py-1">Alanita Travel Inc.,</p>
                <div className="space-y-1">
                  <p>87, Common Street, Watertown,</p>
                  <p>MA 02472,</p>
                  <p>USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1347px] py-5">
            <OurLocation />
          </div>
        </div>
      </div>
    </>
  );
}
