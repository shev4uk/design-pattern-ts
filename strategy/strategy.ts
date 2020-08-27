class NavigatorMap {

  constructor(private strategy : RouteStrategy) {}

  public setStrategy(strategy: RouteStrategy) {
    this.strategy = strategy;
  }

  public showRoute(): void {
    const result = this.strategy.buildRoute('house', 'work');
    console.log(result);
}

}

interface RouteStrategy {
  buildRoute(A: string, B: string): string;
}

class RoadStrategy implements RouteStrategy {
  public buildRoute(A: string, B: string) {
    return `RoadStrategy: route from ${A} to ${B}`;
  }
}

class PublicTransportStrategy implements RouteStrategy {
  public buildRoute(A: string, B: string) {
    return `PublicTransportStrategy: route from ${A} to ${B}`;
  }
}

let navigatorMap = new NavigatorMap(new RoadStrategy());
navigatorMap.showRoute();

navigatorMap.setStrategy(new PublicTransportStrategy());
navigatorMap.showRoute();