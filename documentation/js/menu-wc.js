'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' : 'data-target="#xs-controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' :
                                            'id="xs-controllers-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' : 'data-target="#xs-injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' :
                                        'id="xs-injectables-links-module-AppModule-9d7c90a925da7e1fd20ae9792648df6ee1c5d0928618fe02b551b5b078f275dff29a58074b7fabbbb927ef4d1042765a9207081c7abecdad45c52712bc89c052"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                            'id="xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                        'id="xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' : 'data-target="#xs-controllers-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' :
                                            'id="xs-controllers-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' : 'data-target="#xs-injectables-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' :
                                        'id="xs-injectables-links-module-OrderModule-7a08e34c05f5b5f99179ca1e9b97d74d66407a15e6baae96d683fc8a31e46d22bcf9a88a03c0c9d1694f9d1f6b9ded8f72aaf31ef5a1b1256e2e1ef5a4115527"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' : 'data-target="#xs-controllers-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' :
                                            'id="xs-controllers-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' : 'data-target="#xs-injectables-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' :
                                        'id="xs-injectables-links-module-ProductModule-73270c6d4aba283876d5a8b8a3425fdb7c17468e8c8c9cee01a574ff8a4d9cc1345e2d348a2549fae00e2f479a3d1161460088d6c7399766212c3cfc080aebe1"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' : 'data-target="#xs-controllers-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' :
                                            'id="xs-controllers-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' : 'data-target="#xs-injectables-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' :
                                        'id="xs-injectables-links-module-TableModule-9b5eb89af93096458f1bc843ea7db4932b779ccea79b59d28cec1d6f7c19218ef229ff385f58999670e591795a852a0aafda4a7c1d3d80f45dedb3d47771d80d"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' : 'data-target="#xs-controllers-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' :
                                            'id="xs-controllers-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' : 'data-target="#xs-injectables-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' :
                                        'id="xs-injectables-links-module-UserModule-4656951291ef4de2d0299e1b12417550574b99b94285d3ba6bb012777584edee13d17af2f9bd800e4188a8bd50ab65f30e884e8a73d82cb52c641f3cda2dc7ec"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});