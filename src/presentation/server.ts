










private serverListener: any;
private readonly port: number;
private readonly routes: Router;

constructor(options: Options){
    const {port, routes } = options;
    this.port = port;
    this.routes = routes;
}

async start(){

    this.app.use(express.json() );
    this.app.use( express.urlencoded({ extended: true }) );

    this.app.use(this.routes);

    this.serverListener = this.PaymentResponse.listen(this.prompt, () => {
        console.log('Server is running on port ${this.port}');
    })

}

}