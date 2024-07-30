import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { AllLocales, AppConfig } from "@/config/app-config"

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
})
