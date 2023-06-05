// ** Icon imports
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import AccessibilityIcon from '@mui/icons-material/Accessibility'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { useContext } from 'react'
import { AbilityContext } from 'src/layouts/components/acl/Can'

const navigation = (): VerticalNavItemsType => {
  // const ability = useContext(AbilityContext)

  return [
    {
      title: 'Category',
      icon: PersonalVideoIcon,
      path: '/category',
      action: 'itsHaveAccess',
      subject: 'category-page'
    },

    //Page with children Example
    {
      title: 'Page With Children',
      icon: AccessibilityIcon,
      action: 'itsHaveAccess',
      subject: 'teachers-page',
      children: [
        {
          title: 'Children 1',
          icon: AccessibilityIcon,
          path: '/child1',
          action: 'itsHaveAccess',
          subject: 'teachers-page'
        },
        {
          title: 'Children 2',
          icon: AccessibilityIcon,
          path: '/child2',
          action: 'itsHaveAccess',
          subject: 'teachers-page'
        },
        {
          title: 'Children 3',
          icon: AccessibilityIcon,
          path: '/child3',
          action: 'itsHaveAccess',
          subject: 'teachers-page'
        },
      ]
    }
  ]
}

export default navigation
