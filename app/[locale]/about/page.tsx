import { getAbout } from "@/actions/get-about";
import { Container } from "@/components/ui/container";
import { LocalLanguagesEn } from "@/enum/local-languages";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import parsePhoneNumber from 'libphonenumber-js'

interface AboutPageProps {
  params: { 
    locale: LocalLanguagesEn, 
  }
}

const AboutPage: NextPage<AboutPageProps> = async (props) => {
  const { params: { locale } } = props;
  const about = await getAbout({ locale });
  const t = await getTranslations("About");

  const formatPhoneNumber = (phone: string | undefined) => {
    if (!phone) return phone;
    const phoneNumber = parsePhoneNumber(phone);
    if (!!phoneNumber) return phoneNumber.formatInternational()
  }

  return (
    <Container>
      <div
          className="px-4 py-10 sm:px-6 lg:px-8"
      >
        <h4
          className="text-3xl font-bold text-foreground leading-6"
        >
          {t("HeaderAbout")}
        </h4>
        <div
          className="mt-3 flex flex-col pt-6"
        >
          <span
            className="text-lg"
          >
            {t("Consultations")}
          </span>
          <div
            className="flex gap-x-4 pt-4"
          >
            <a
              href={`tel:${about?.phoneOne}`}
            >
              {formatPhoneNumber(about?.phoneOne)}
            </a>
            {
              !!about?.phoneTwo && (
                <a
                  href={`tel:${about?.phoneOne}`}
                >
                  {formatPhoneNumber(about?.phoneOne)}
                </a>
              ) 
            }
          </div>
        </div>
        <div
          className="pt-6"
        >
          <p
            className="text-sm text-foreground"
          >
            {about?.ruText ?? about?.uaText}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage;