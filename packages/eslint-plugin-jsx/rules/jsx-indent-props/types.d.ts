export type Schema0 =
  | ('tab' | 'first')
  | number
  | {
    indentMode?: ('tab' | 'first') | number
    ignoreTernaryOperator?: boolean
    [k: string]: unknown
  }

export type RuleOptions = [Schema0?]
