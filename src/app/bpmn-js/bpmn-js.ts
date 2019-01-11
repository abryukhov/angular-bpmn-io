import * as _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import * as _CamundaPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as _ElementTemplates from 'bpmn-js-properties-panel/lib/provider/camunda/element-templates';
import * as _PropertiesPanelModule from 'bpmn-js-properties-panel';
import * as _CamundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import Modeler from 'bpmn-js/lib/Modeler';

export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  entryFactory: 'entryFactory',
  elementFactory: 'elementFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  moddle: 'moddle',
  bpmnModdle: 'bpmnModdle',
  propertiesProvider: 'propertiesProvider',
  elementTemplates: 'elementTemplates',
  paletteProvider: 'paletteProvider',
  originalPaletteProvider: 'originalPaletteProvider'
};

export const EntryFactory = _EntryFactory;
export const BpmnModeler = Modeler;
export const OriginalPaletteProvider = PaletteProvider;
export const CamundaPropertiesProvider = _CamundaPropertiesProvider;
export const ElementTemplates = _ElementTemplates;
export const PropertiesPanelModule = _PropertiesPanelModule;
export const CamundaModdleDescriptor = _CamundaModdleDescriptor;

export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}

export interface IPropertiesProvider {
  getTabs(elemnt): any;
}

