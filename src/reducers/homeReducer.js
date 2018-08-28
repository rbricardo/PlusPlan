const INITIAL_STATE = {
  originValue: '011',
  destinyValue: '011',
  minValue: 0,
  time: 0,
  plan: 30,
  withPlan: '-',
  withoutPlan: '-',
  results: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ORIGEM_VALUE':
      return {
        ...state,
        originValue: action.payload,
      };
    case 'SET_DESTINO_VALUE':
      return {
        ...state,
        destinyValue: action.payload,
      };
    case 'SET_MIN_VALUE':
      return {
        ...state,
        minValue: action.payload,
      };
    case 'SET_TIME':
      return {
        ...state,
        time: action.payload,
      };
    case 'SET_PLAN':
      return {
        ...state,
        plan: action.payload,
      };
    case 'CLEAR_TABLE':
      return {
        ...state,
        results: [],
      };

    case 'SET_TABLE':
      return {
        ...state,
        results: action.payload,
      };

    case 'GET_TABLE_INIT':
      return {
        ...state,
        results: action.payload,
      };

    case 'SET_WITH_PLAN':
      return {
        ...state,
        withPlan: action.payload < 0 ? '-' : action.payload,
      };

    case 'SET_WITHOUT_PLAN':
      return {
        ...state,
        withoutPlan: action.payload < 0 ? '-' : action.payload,
      };

    case 'ADD_TABLE':
      return {
        ...state,
        results: [
          ...state.results,
          {
            origin: state.originValue,
            destiny: state.destinyValue,
            time: state.time,
            plan: state.plan,
            withPlan: state.withPlan,
            withoutPlan: state.withoutPlan,
          },
        ]
      };
    case 'CLEAR':
      return {
        ...state,
        originValue: '011',
        destinyValue: '011',
        minValue: '',
        time: 0,
        plan: 30,
        withPlan: '-',
        withoutPlan: '-',
      };
    default:
      return state;
  }
};
