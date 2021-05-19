export interface Observation {
	id: string;
	basedOn: string;			// reference -> CarePlan, NutritionOrder
	partOf: string;				// reference -> Procedure, Immunization
	status: string;				// code -> registered, final, cancelled, unknown
	category: string;			// code -> exam, laboratory, survey
	code: number;				// 5 random digit
	subject: string;			// reference -> patient, group, device
	focus: string;				// reference -> [any] eg.: condition, intervention, observation 
	encounter: string;			// reference -> Encounter eg.: ambulatory, emergency, virtual
	effective: Date;			// date
	issued: Date;				// date
	performer: string;			// reference -> organization, patient, careteam
	valuee: any;					// [any type]
	dataAbsentReason: string;	// codeableConcept eg.: Unknown, Not Asked, Unsupported
	interpretation: string;		// codeableConcept eg.: normal, better, worse
	note: string;				// annotation -> any string
	bodySite: string;			// codeableConcept eg.: Jaw region, Synostosis, Pectoral region
	method: string;				// codeableConcept eg.: Photon detection technique, Sbisa bar, Acidometric method
	specimen: string;			// reference -> tissues, organs, embryos
	device: string;				// reference -> Atomizer, Epilator, Blood electrolyte analyzer, Feeding catheter
	referenceRange: number;		// Observation.referenceRange.text -> reference value: 10, 20, 30
	hasMember: string;			// reference -> Observation, QuestionnaireResponse, MolecularSequence
	derivedFrom: string;		// reference ->  ImagingStudy, Media, QuestionnaireResponse
}