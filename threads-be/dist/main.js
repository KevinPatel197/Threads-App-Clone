"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const mongo_validations_filter_1 = require("./mongo-validations.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    app.useGlobalFilters(new mongo_validations_filter_1.ValidationErrorFilter());
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map