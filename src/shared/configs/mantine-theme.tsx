import {
  Button,
  ActionIcon,
  Badge,
  Anchor,
  MultiSelect,
  Pill,
  TagsInput,
  Title,
  Radio,
  Progress,
  LoadingOverlay,
  Image,
  createTheme,
  rem,
  Modal,
  Overlay,
  Select,
  List,
  TextInput,
  PasswordInput
} from '@mantine/core';
import colors from './colors';
import form from './form';

export default createTheme({
  primaryColor: 'grape',
  primaryShade: 6,
  colors,
  headings: {
    fontWeight: '600',
    sizes: {
      h1: {
        fontSize: rem(24)
      },
      h2: {
        fontSize: rem(20)
      },
      h3: {
        fontSize: rem(18)
      }
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  components: {
    List: List.extend({
      defaultProps: {
        styles: {
          item: {
            lineHeight: 'normal',
            textIndent: '-6px'
          }
        }
      }
    }),
    Image: Image.extend({
      defaultProps: {
        fallbackSrc: 'https://web-assets.alo7.com/assets/images/apply7-ph.jpg'
      }
    }),
    LoadingOverlay: LoadingOverlay.extend({
      defaultProps: {
        zIndex: 100
      }
    }),
    Progress: Progress.extend({
      defaultProps: {
        classNames: {
          section: 'rounded-full'
        }
      }
    }),
    Title: Title.extend({
      defaultProps: {
        order: 1,
        classNames: {
          root: '!border-none !pb-0'
        }
      }
    }),
    Radio: Radio.extend({
      defaultProps: {
        classNames: {
          label: 'text-black'
        }
      }
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        classNames: {
          pill: 'bg-grape-600 text-white'
        }
      }
    }),
    Select: Select.extend({
      defaultProps: {
        allowDeselect: false
      }
    }),
    TagsInput: TagsInput.extend({
      defaultProps: {
        classNames: {
          pill: 'bg-grape-600 text-white'
        }
      }
    }),
    Pill: Pill.extend({
      defaultProps: {
        size: 'xl',
        variant: 'light',
        classNames: {
          label: 'text-sm fcc bg-grape-600 cursor-pointer'
        }
      }
    }),
    Button: Button.extend({
      defaultProps: {
        radius: 'xl',
        classNames: {
          label: 'text-sm capitalize'
        }
      }
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: 'transparent',
        color: 'dark'
      }
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: 'grape.6'
      }
    }),
    Badge: Badge.extend({
      defaultProps: {
        classNames: {
          root: 'min-w-6'
        }
      }
    }),
    Overlay: Overlay.extend({
      defaultProps: {
        blur: 50,
        color: 'rgba(241, 243, 250, 0.68)'
      }
    }),
    Modal: Modal.extend({
      defaultProps: {
        radius: 'lg',
        centered: true,
        overlayProps: {
          blur: 5
        },
        classNames: {
          title: 'f-4.5 leading-normal font-sans fw-6',
          body: 'y-5'
        },
        styles: {
          header: {
            minHeight: 'auto'
          },
          overlay: {
            backgroundColor: 'rgba(241, 243, 250, 0.68)'
          },
          content: {
            boxShadow: '0px 4px 20px 0px #6D87CA38'
          }
        }
      }
    }),
    TextInput: TextInput.extend({
      ...form.inputs
    }),
    PasswordInput: PasswordInput.extend({
      ...form.inputs
    })
  }
});
