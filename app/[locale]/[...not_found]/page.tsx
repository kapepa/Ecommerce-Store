import { Container } from '@/components/ui/container'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { FC } from 'react'

interface NotFoundLocaleProps {
  params: {
    locale: string
  }
}

const NotFoundLocale: FC<NotFoundLocaleProps> = async (props) => {
  const { params: { locale } } = props;
  const t = await getTranslations('NotFound');

  return (
    <Container>
      <div
        className='min-h-[65vh] md:min-h-[84vh] flex justify-center items-center flex-col gap-y-5'
      >
        <h3
          className='text-4xl'
        >
          {t("PageNotFound404")}
        </h3>
        <div>
          <Link 
            href={`/${locale}`}
            className='underline hover:no-underline'
          >
            {t("BackToTheMainPage")}
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundLocale