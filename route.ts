import Vue from "vue";

interface Routable {
    id: number | string

    [key: string]: any
}

type RouteParam = Routable | string | number | boolean

interface RouteParams {
    [key: string]: RouteParam
}

interface RoutesOptional {
    'test1': RouteParams,
}

interface RoutesScope extends RoutesOptional {
    'test2': {
        'test': RouteParam,
    }
}

declare module 'vue/types/vue' {

    interface Vue {
        route<TScope extends keyof RoutesOptional>(
            name: TScope,
            properties?: RoutesOptional[TScope],
        ): string,

        route<TScope extends keyof RoutesScope>(
            name: TScope,
            properties: RoutesScope[TScope],
        ): string,
    }
}
