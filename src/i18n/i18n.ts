import { computed, ref, type ComputedRef, type Ref } from "vue";
import zh from "./languages/zh";
import en from "./languages/en";

const locales = { zh, en };
export type Locales = keyof typeof locales;
export type Messages = (typeof locales)[Locales];

const defaultLocale: Locales = "zh";
const locale = ref(defaultLocale);

export type I18n = {
  $locale: Ref<Locales>;
  $messages: ComputedRef<Messages>;
} & Messages;

const hanlders: ProxyHandler<I18n> = {
  get(target, key: string, receiver) {
    // $ 开头为 i18n 自身的属性
    if (key.startsWith("$")) {
      return Reflect.get(target, key, receiver);
    }

    // 其他属性代理到 $messages 对象上
    const messages = target.$messages.value;
    return messages[key as keyof Messages];
  },
  set(target, key: string, value, receiver) {
    if (key.startsWith("$")) {
      return Reflect.set(target, key, value, receiver);
    }

    // 其他属性暂时不能直接设置值
    return false;
  },
};

export const i18n = new Proxy(
  {
    $locale: locale,
    $messages: computed(() => {
      return locales[locale.value];
    }),
  } as I18n,
  hanlders
);
