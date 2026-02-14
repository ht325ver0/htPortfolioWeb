export const TECH_COLORS: Record<string, string> = {
  Vue: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  Vite: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  Tailwind: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  Python: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  // デフォルトの色
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300',
}

export const getTechColor = (tech: string) => {
  return TECH_COLORS[tech] || TECH_COLORS.default
}