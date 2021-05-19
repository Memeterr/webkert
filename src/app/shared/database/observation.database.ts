import { Observation } from '../models/observation.model';

export const OBSERVATIONS: Observation[] = [
	{
		id: '1',
		basedOn: 'CarePlan',			// reference -> CarePlan, NutritionOrder
		partOf: 'Procedure',				// reference -> Procedure, Immunization
		status: 'registered',				// code -> registered, final, cancelled, unknown
		category: 'laboratory',			// code -> exam, laboratory, survey
		code: 1,				// 5 random digit
		subject: 'patient',			// reference -> patient, group, device
		focus: 'condition',				// reference -> [any] eg.: condition, intervention, observation 
		encounter: 'ambulatory',			// reference -> Encounter eg.: ambulatory, emergency, virtual
		effective: new Date('2012.06.01.'),		// date
		issued: new Date('2012.06.01.'),				// date
		performer: 'organization',			// reference -> organization, patient, careteam
		valuee: 'asd',					// [any type]
		dataAbsentReason: 'Unknown',	// codeableConcept eg.: Unknown, Not Asked, Unsupported
		interpretation: 'normal',		// codeableConcept eg.: normal, better, worse
		note: 'No note',				// annotation -> any string
		bodySite: 'Jaw region',			// codeableConcept eg.: Jaw region, Synostosis, Pectoral region
		method: 'Photon detection technique',				// codeableConcept eg.: Photon detection technique, Sbisa bar, Acidometric method
		specimen: 'tissues',			// reference -> tissues, organs, embryos
		device: 'Atomizer',				// reference -> Atomizer, Epilator, Blood electrolyte analyzer, Feeding catheter
		referenceRange: 3,		// Observation.referenceRange.text -> reference value: 10, 20, 30
		hasMember: 'Observation',			// reference -> Observation, QuestionnaireResponse, MolecularSequence
		derivedFrom: 'ImagingStudy',			// reference ->  ImagingStudy, Media, QuestionnaireResponse
	},
	{
		id: '2',
		basedOn: 'NutritionOrder',			// reference -> CarePlan, NutritionOrder
		partOf: 'Immunization',				// reference -> Procedure, Immunization
		status: 'cancelled',				// code -> registered, final, cancelled, unknown
		category: 'survey',			// code -> exam, laboratory, survey
		code: 123,				// 5 random digit
		subject: 'device',			// reference -> patient, group, device
		focus: 'intervention',				// reference -> [any] eg.: condition, intervention, observation 
		encounter: 'virtual',			// reference -> Encounter eg.: ambulatory, emergency, virtual
		effective: new Date('2012.06.01.'),		// date
		issued: new Date('2012.06.01.'),				// date
		performer: 'organization',			// reference -> organization, patient, careteam
		valuee: 'no value',					// [any type]
		dataAbsentReason: 'Unsupported',	// codeableConcept eg.: Unknown, Not Asked, Unsupported
		interpretation: 'worse',		// codeableConcept eg.: normal, better, worse
		note: 'No note',				// annotation -> any string
		bodySite: 'Pectoral region',			// codeableConcept eg.: Jaw region, Synostosis, Pectoral region
		method: 'Sbisa bar',				// codeableConcept eg.: Photon detection technique, Sbisa bar, Acidometric method
		specimen: 'organs',			// reference -> tissues, organs, embryos
		device: 'Epilator',				// reference -> Atomizer, Epilator, Blood electrolyte analyzer, Feeding catheter
		referenceRange: 3,		// Observation.referenceRange.text -> reference value: 10, 20, 30
		hasMember: 'MolecularSequence',			// reference -> Observation, QuestionnaireResponse, MolecularSequence
		derivedFrom: 'QuestionnaireResponse',			// reference ->  ImagingStudy, Media, QuestionnaireResponse
	}
];