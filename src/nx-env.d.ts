type IProvider = React.PropsWithChildren;
type NxUseQueryResult = import('@tanstack/react-query').UseQueryResult<any>;
type AnyObject = Record<string, any>;
type ButtonType = 'submit' | 'reset' | 'button' | undefined;

declare const clarity;

interface Kv {
  label: string;
  value: string;
  help?: boolean;

  [key: string]: any;
}

interface NxStatic {
  $api: any;
  $event: any;
  $toast: import('react-hot-toast');
  $notify: import('@mantine/notifications').NotificationsEvents;
  $client: import('@tanstack/react-query').QueryClient;
  $patch: import('@/store').Patch;
  $use: (path: any, defaults?) => any;
  $get: (path: string, defaults?) => any;
  $dapi: any;
  $nav: import('react-router').NavigateFunction;
  $navBack: () => void;
  getQueryData: (queryKey: string | any[]) => any;
  useQuery: (key: string | AnyObject, opts?) => NxUseQueryResult;
  useMutation: (key: string | AnyObject, opts?) => any;
  invalidateQuery: (key: string | string[]) => any;
  store: import('@reduxjs/toolkit/dist/configureStore').ToolkitStore;
  actions: Record<string, any>;
  role: () => string;
  marked: (src: string, options?: any) => string;
}

interface Model {
  model?: any;
}

interface StdEvent {
  target: {
    value: any;
  };
}

interface StdCustomInputProps<T> {
  value?: T;
  onChange?: (event: any) => void;

  [key: string]: any;
}

interface IGpaGrades {
  gpa: number;
  gpa_raw: number;
  gpa_raw_scale: number;
  toefl: number;
  gre: number;
  className?: string;
}

interface IWidgetProps extends react.HTMLAttributes<HTMLElement> {
  widget: string;
  payload: AnyObject;
  node: any;
}
