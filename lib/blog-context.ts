// src/lib/blog-context.ts
type Locale = 'en' | 'fr' | 'ar';

class BlogAlternateStore {
  private static instance: BlogAlternateStore;
  private routes: Partial<Record<Locale, string>> = {};

  private constructor() {}

  public static getInstance(): BlogAlternateStore {
    if (!BlogAlternateStore.instance) {
      BlogAlternateStore.instance = new BlogAlternateStore();
    }
    return BlogAlternateStore.instance;
  }

  public setAlternates(maps: Partial<Record<Locale, string>>) {
    this.routes = maps;
  }

  public getAlternates(): Partial<Record<Locale, string>> {
    return this.routes;
  }

  public clear() {
    this.routes = {};
  }
}

export const blogStore = BlogAlternateStore.getInstance();