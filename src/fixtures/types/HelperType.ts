import { TestDataReader } from '@utilities/reader-utils/JsonReader';
import { RandomDataGenerator } from 'src/helpers/random-data-generator/RandomDataGenerator';
import { ActionUtils } from 'src/utilities/ActionUtils';

export interface TestDataType {
  randomDataGenerator: RandomDataGenerator;
  jsonReader: TestDataReader;
}

export interface ActionUtilsType {
  actionUtils: ActionUtils;
}

export interface HelperType extends TestDataType, ActionUtilsType{}