import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { badRequestException } from '../utils';

export class ParamValidator implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value)
      badRequestException(`O parâmetro ${metadata.type} não é válido!`);
    else return value;
  }
}
