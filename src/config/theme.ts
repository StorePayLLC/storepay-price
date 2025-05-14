import { ThemeConfig } from 'antd/lib/config-provider/context';

export const lightTheme: ThemeConfig = {
  token: {
    fontFamily: 'Manrope, sans-serif',
    colorPrimary: '#0055FF',
    colorLink: '#0055FF',
    colorError: '#FF3C32',
    colorWarning: '#FF9600',
    colorSuccess: '#32C85A',
    colorInfo: '#818386',
    colorPrimaryActive: '#003399',
    colorText: '#818386',
    fontSize: 13,
    fontSizeSM: 12,
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorText: '#e0e0e0',
    colorIcon: '#e0e0e0',
    colorInfoActive: '#e0e0e0',
    colorBgContainer: '#0d0f12',
    colorBorder: '#000',
    colorPrimary: '#0055FF',
    colorLink: '#0055FF',
    colorPrimaryActive: '#003399',
    colorPrimaryBg: '#0055FF',
    colorError: '#FF3C32',
    colorErrorBg: '#FF3C32',
    colorSuccess: '#32C85A',
    colorSuccessBg: '#32C85A',
    colorBgTextHover: '#fff',
  },
  components: {
    Select: {
      optionActiveBg: '#000',
      colorBgContainer: '#0d0f12',
    },
  },
};
