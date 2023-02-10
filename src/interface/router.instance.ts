import { RouteLocationNormalized } from "vue-router";

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    label?: string,
    inMenu?: Boolean,
    keepAlive?: boolean;
    dynamicLevel?: string;
  };
}
