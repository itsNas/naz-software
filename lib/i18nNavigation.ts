import { AllLocales, AppConfig } from "@/utils/app-config"
import { createSharedPathnamesNavigation } from "next-intl/navigation"

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
})
