import { NbMenuItem } from '@nebular/theme';
export const MENU_ITEMS: NbMenuItem[] = [
    // {
    //   title: 'E-commerce',
    //   icon: 'shopping-cart-outline',
    //   link: '/pages/dashboard',
    //   home: true,
    // },
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard/home',
    },
    // {
    //   title: 'FEATURES',
    //   group: true,
    // },
    
    {
      title: 'HSN',
      icon: 'edit-2-outline',
      link: '/dashboard/hsn',
    },
    {
      title: 'Products',
      icon: 'keypad-outline',
      link: '/dashboard/product/',
      children: [
        {
          title: 'Product List',
          link: '/dashboard/product/list',
        },
        {
          title: 'Add Product',
          link: '/dashboard/product/create',
        },
      ],
    },
    {
      title: 'Stock Entry',
      icon: 'monitor-outline',
    },
    {
      title: 'Vendor Management',
      icon: 'car-outline',
    },
    {
      title: 'Orders',
      icon: 'cube-outline',
    },
    {
      title: 'Website Management',
      icon: 'tv-outline',
    },
    {
      title: 'Admin',
      icon: 'lock-outline',
      children: [
        {
          title: 'Users List',
          link: '/pages/layout/stepper',
        },
        {
          title: 'Staff List',
          link: '/pages/layout/list',
        },
        {
          title: 'Groups',
          link: '/pages/layout/infinite-list',
        },
        {
          title: 'Add Staff',
          link: '/pages/layout/accordion',
        },
        // {
        //   title: 'Tabs',
        //   pathMatch: 'prefix',
        //   link: '/pages/layout/tabs',
        // },
      ],
    },
  ];
export const FOOTER_MENU_ITEMS: NbMenuItem[] =[
  {
    title: 'Admin',
    icon: 'layout-outline',
    children: [
      {
        title: 'Users List',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Staff List',
        link: '/pages/layout/list',
      },
      {
        title: 'Groups',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Add Staff',
        link: '/pages/layout/accordion',
      },
      // {
      //   title: 'Tabs',
      //   pathMatch: 'prefix',
      //   link: '/pages/layout/tabs',
      // },
    ]
  }
]