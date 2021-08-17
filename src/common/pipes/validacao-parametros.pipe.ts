import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class ValidacaoParametrosPipe implements PipeTransform {

    transform (value: any, metadata: ArgumentMetadata) {

        if(!value) {
            throw new BadRequestException(`The parameter Value ${metadata.data} is required`)
        }

        return value

    }

}