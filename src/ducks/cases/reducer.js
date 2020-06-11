import casesTypes from 'ducks/cases/types';

const initialState = {
  activeCase: null,
  cases: null,
  status: '',
  error: null,
  record: null,
  externalId: null,
  accessCode: null,
  updateExtIDError: null
};

export default function reducer(state = initialState, action) {
  const { type, status, data, caseId, accessCode, externalId, updateExtIDError } = action;
  switch (type) {
    case casesTypes.STATUS:
      return { ...state, status: status };
    case casesTypes.ADD_CASES:
      return {
        ...state,
        cases: data.cases,
      };
    case casesTypes.ADD_CASE:
      return {
        ...state,
        activeCase: data,
      };
    case casesTypes.SET_ACTIVE_CASE:
      return {
        ...state,
        activeCase: caseId,
      };
    case casesTypes.SET_ACCESS_CODE:
      return {
        ...state,
        accessCode,
      };
    case casesTypes.ENRICH_CASE: {
      return {
        ...state,
        record: {
          ...state.record,
          points: data,
        },
      };
    }


    case casesTypes.externalID.REQUEST: {
      return {
        ...state,
        fetching: true,
      }
    }
    case casesTypes.externalID.SUCCESS: {
      return {
        ...state,
        fetching: false,
        externalId
      }
    }
    case casesTypes.externalID.FAILURE: {
      return {
        ...state,
        fetching: false,
        error: updateExtIDError
      }
    }

    default:
      return state;
  }
}
