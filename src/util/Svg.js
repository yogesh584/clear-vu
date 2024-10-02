export const OpenEyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-eye"
      viewBox="0 0 16 16"
    >
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
  )
}

export const EyeIcon = () => {
  return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4833 9.99993C13.4833 11.6499 12.1499 12.9833 10.4999 12.9833C8.84993 12.9833 7.5166 11.6499 7.5166 9.99993C7.5166 8.34993 8.84993 7.0166 10.4999 7.0166C12.1499 7.0166 13.4833 8.34993 13.4833 9.99993Z" stroke="#289A77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.4999 16.8918C13.4415 16.8918 16.1832 15.1584 18.0915 12.1584C18.8415 10.9834 18.8415 9.00843 18.0915 7.83343C16.1832 4.83343 13.4415 3.1001 10.4999 3.1001C7.5582 3.1001 4.81654 4.83343 2.9082 7.83343C2.1582 9.00843 2.1582 10.9834 2.9082 12.1584C4.81654 15.1584 7.5582 16.8918 10.4999 16.8918Z" stroke="#289A77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

}

export const ClosedEyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-eye-slash"
      viewBox="0 0 16 16"
    >
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
    </svg>
  )
}

export const TrashIcon = ({ svgStyle = {}, pathStyle = {} }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...svgStyle }}>
      <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" fill="#FB6464" style={{ ...pathStyle }} />
      <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#FB6464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...pathStyle }} />
      <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FB6464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...pathStyle }} />
      <path d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014" stroke="#FB6464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...pathStyle }} />
      <path d="M10.3301 16.5H13.6601" stroke="#FB6464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...pathStyle }} />
      <path d="M9.5 12.5H14.5" stroke="#FB6464" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...pathStyle }} />
    </svg>

  )
}

export const CrossIcon = ({ svgStyle = {}, pathStyle = {} }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ ...svgStyle }} viewBox="0 0 384 512"><path style={{ ...pathStyle }} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
  )
}

export const NotificationCloseIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="13.5" stroke="#9A9B9D" strokeWidth="1.5" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.182 19.7729C18.6213 20.2122 19.3336 20.2122 19.773 19.7729C20.2123 19.3336 20.2123 18.6213 19.773 18.1819L16.591 14.9999L19.7729 11.818C20.2122 11.3787 20.2122 10.6664 19.7729 10.227C19.3336 9.7877 18.6213 9.7877 18.1819 10.227L15 13.4089L11.818 10.227C11.3787 9.78763 10.6664 9.78763 10.227 10.227C9.78771 10.6663 9.7877 11.3786 10.227 11.818L13.409 14.9999L10.227 18.182C9.78763 18.6213 9.78763 19.3336 10.227 19.773C10.6663 20.2123 11.3786 20.2123 11.818 19.773L15 16.5909L18.182 19.7729Z" fill="#9A9B9D" />
    </svg>

  )
}

export const SortingIcon = ({ order, isSortActive }) => {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: order === "asc" ? "rotate(180deg)" : "rotate(0deg)" }}>
      <path d="M2.91262 4.47325C3.31104 4.92857 4.01937 4.92857 4.41778 4.47325L6.88068 1.65851C7.44644 1.01192 6.98726 0 6.1281 0H1.2023C0.343143 0 -0.116033 1.01192 0.449727 1.6585L2.91262 4.47325Z" fill={isSortActive ? "#1D242B" : "#a4a7ab"} />
      <path d="M2.91262 4.47325C3.31104 4.92857 4.01937 4.92857 4.41778 4.47325L6.88068 1.65851C7.44644 1.01192 6.98726 0 6.1281 0H1.2023C0.343143 0 -0.116033 1.01192 0.449727 1.6585L2.91262 4.47325Z" fill="white" fillOpacity="0.2" />
      <path d="M2.91262 4.47325C3.31104 4.92857 4.01937 4.92857 4.41778 4.47325L6.88068 1.65851C7.44644 1.01192 6.98726 0 6.1281 0H1.2023C0.343143 0 -0.116033 1.01192 0.449727 1.6585L2.91262 4.47325Z" fill="white" fillOpacity="0.2" />
    </svg>
  )
}

export const StopwatchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.49998 1.25C7.49998 0.918479 7.63168 0.600537 7.8661 0.366116C8.10052 0.131696 8.41846 0 8.74998 0L11.25 0C11.5815 0 11.8994 0.131696 12.1339 0.366116C12.3683 0.600537 12.5 0.918479 12.5 1.25C12.5 1.58152 12.3683 1.89946 12.1339 2.13388C11.8994 2.3683 11.5815 2.5 11.25 2.5V2.5875C12.504 2.76709 13.7036 3.21845 14.765 3.91L15.9 2.775C15.9858 2.68289 16.0893 2.60901 16.2043 2.55777C16.3193 2.50653 16.4435 2.47898 16.5693 2.47676C16.6952 2.47454 16.8202 2.49769 16.937 2.54485C17.0537 2.592 17.1598 2.66218 17.2488 2.7512C17.3378 2.84023 17.408 2.94627 17.4551 3.063C17.5023 3.17974 17.5254 3.30477 17.5232 3.43065C17.521 3.55653 17.4935 3.68067 17.4422 3.79567C17.391 3.91067 17.3171 4.01417 17.225 4.1L16.225 5.1C17.6079 6.50053 18.4783 8.32642 18.6954 10.2827C18.9125 12.2389 18.4637 14.2112 17.4216 15.8809C16.3794 17.5506 14.8048 18.8202 12.952 19.4845C11.0993 20.1488 9.07668 20.169 7.211 19.5419C5.34533 18.9149 3.74557 17.6771 2.6702 16.0285C1.59484 14.38 1.10669 12.4171 1.28462 10.4569C1.46255 8.49674 2.29616 6.65379 3.65078 5.22586C5.0054 3.79792 6.80189 2.86841 8.74998 2.5875V2.5C8.41846 2.5 8.10052 2.3683 7.8661 2.13388C7.63168 1.89946 7.49998 1.58152 7.49998 1.25ZM16.875 11.25C16.875 13.0734 16.1507 14.822 14.8613 16.1114C13.572 17.4007 11.8233 18.125 9.99998 18.125C8.17662 18.125 6.42794 17.4007 5.13863 16.1114C3.84931 14.822 3.12498 13.0734 3.12498 11.25C3.12498 9.42664 3.84931 7.67795 5.13863 6.38864C6.42794 5.09933 8.17662 4.375 9.99998 4.375C11.8233 4.375 13.572 5.09933 14.8613 6.38864C16.1507 7.67795 16.875 9.42664 16.875 11.25ZM10.9375 7.1875C10.9375 6.93886 10.8387 6.7004 10.6629 6.52459C10.4871 6.34877 10.2486 6.25 9.99998 6.25C9.75134 6.25 9.51289 6.34877 9.33707 6.52459C9.16126 6.7004 9.06248 6.93886 9.06248 7.1875V11.6375L9.33748 11.9125L12.155 14.73C12.2408 14.8221 12.3443 14.896 12.4593 14.9472C12.5743 14.9985 12.6985 15.026 12.8243 15.0282C12.9502 15.0305 13.0752 15.0073 13.192 14.9602C13.3087 14.913 13.4148 14.8428 13.5038 14.7538C13.5928 14.6648 13.663 14.5587 13.7101 14.442C13.7573 14.3253 13.7804 14.2002 13.7782 14.0743C13.776 13.9485 13.7485 13.8243 13.6972 13.7093C13.646 13.5943 13.5721 13.4908 13.48 13.405L10.9375 10.8612V7.1875Z"
        fill="#4D9E93"
      />
    </svg>
  );
};

export const Dashboard = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H10V21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5ZM14 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V10H14V3ZM14 14H22V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H14V14Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke" />
    </svg>
  );
};

export const Inventory = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="stroke" d="M3.17001 7.43994L12 12.5499L20.77 7.46991" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="stroke" d="M12 21.61V12.54" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="stroke" d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="stroke" d="M17 13.2401V9.58014L7.51001 4.1001" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export const UserSideBar = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="fill" d="M16.2368 18.0843C16.5051 18.0846 16.7632 18.188 16.9583 18.3732C17.1534 18.5585 17.2708 18.8117 17.2865 19.0811C17.3022 19.3505 17.2151 19.6158 17.0429 19.8227C16.8707 20.0297 16.6264 20.1627 16.36 20.1946L16.2368 20.202H12.0263C11.758 20.2017 11.5 20.0983 11.3049 19.9131C11.1098 19.7278 10.9924 19.4746 10.9766 19.2052C10.9609 18.9358 11.0481 18.6705 11.2203 18.4636C11.3925 18.2566 11.6367 18.1236 11.9031 18.0917L12.0263 18.0843H16.2368ZM16.2368 7.49609C16.5051 7.49639 16.7632 7.59973 16.9583 7.78499C17.1534 7.97025 17.2708 8.22346 17.2865 8.49286C17.3022 8.76227 17.2151 9.02755 17.0429 9.2345C16.8707 9.44145 16.6264 9.57445 16.36 9.60633L16.2368 9.61374H12.0263C11.758 9.61344 11.5 9.5101 11.3049 9.32484C11.1098 9.13958 10.9924 8.88638 10.9766 8.61697C10.9609 8.34756 11.0481 8.08228 11.2203 7.87533C11.3925 7.66838 11.6367 7.53538 11.9031 7.50351L12.0263 7.49609H16.2368Z" fill="#1A1A1A" style={{ fill: '#494b74' }} />
    <path className="fill" d="M21.1918 14.8984C20.9944 14.6998 20.7266 14.5882 20.4474 14.5882H12.0264C11.7472 14.5882 11.4795 14.6998 11.2821 14.8984C11.0847 15.0969 10.9738 15.3662 10.9738 15.6471C10.9738 15.9279 11.0847 16.1972 11.2821 16.3958C11.4795 16.5943 11.7472 16.7059 12.0264 16.7059H20.4474C20.7266 16.7059 20.9944 16.5943 21.1918 16.3958C21.3892 16.1972 21.5001 15.9279 21.5001 15.6471C21.5001 15.3662 21.3892 15.0969 21.1918 14.8984Z" fill="#1A1A1A" style={{ fill: '#494b74' }} />
    <path className="fill" d="M21.1689 4.2889C20.9738 4.10364 20.7157 4.0003 20.4474 4H12.0264L11.9032 4.00741C11.6368 4.03929 11.3925 4.17229 11.2203 4.37924C11.0481 4.58619 10.961 4.85147 10.9767 5.12088C10.9925 5.39028 11.1099 5.64349 11.3049 5.82875C11.5 6.01401 11.7581 6.11735 12.0264 6.11765H20.4474L20.5706 6.11024C20.837 6.07836 21.0813 5.94536 21.2535 5.73841C21.4257 5.53146 21.5128 5.26618 21.4971 4.99677C21.4814 4.72736 21.364 4.47416 21.1689 4.2889Z" fill="#1A1A1A" style={{ fill: '#494b74' }} />
    <path className="stroke" d="M7.76316 14.3382H7.7634C8.10398 14.3381 8.43278 14.4675 8.68374 14.7016C8.93147 14.9326 9.08527 15.249 9.11414 15.5891L9.11842 15.7183V18.8824V18.8826C9.11853 19.229 8.98844 19.5618 8.75542 19.8146C8.52571 20.0637 8.21286 20.2169 7.87845 20.2457L7.75061 20.25H4.60526H4.60502C4.26444 20.2501 3.93564 20.1208 3.68468 19.8867C3.43696 19.6556 3.28315 19.3392 3.25428 18.9991L3.25 18.8699L3.25 15.7059L3.25 15.7056C3.24989 15.3593 3.37998 15.0264 3.613 14.7737C3.84272 14.5245 4.15557 14.3713 4.48999 14.3425L4.61782 14.3382H7.76316ZM7.76316 3.75C8.12117 3.75 8.46542 3.89302 8.71992 4.14902C8.97457 4.40517 9.11842 4.75351 9.11842 5.11765V8.29412C9.11842 8.65825 8.97457 9.0066 8.71992 9.26275C8.46542 9.51875 8.12117 9.66176 7.76316 9.66176H4.60526C4.24725 9.66176 3.903 9.51875 3.6485 9.26275C3.39385 9.0066 3.25 8.65825 3.25 8.29412V5.11765C3.25 4.75351 3.39385 4.40517 3.6485 4.14902C3.903 3.89302 4.24725 3.75 4.60526 3.75H7.76316Z" stroke="black" strokeWidth="1.5" />
  </svg>
}

export const Report = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="fill" fillRule="evenodd" clipRule="evenodd" d="M13.25 2.75H9C6.57397 2.75 5.07086 3.2398 4.15533 4.15533C3.2398 5.07086 2.75 6.57397 2.75 9V15C2.75 17.426 3.2398 18.9291 4.15533 19.8447C5.07086 20.7602 6.57397 21.25 9 21.25H15C17.426 21.25 18.9291 20.7602 19.8447 19.8447C20.7602 18.9291 21.25 17.426 21.25 15V10.75H18C16.4585 10.75 15.1921 10.5028 14.3447 9.65533C13.4972 8.80791 13.25 7.54155 13.25 6V2.75ZM22.75 10.0058V15C22.75 17.574 22.2398 19.5709 20.9053 20.9053C19.5709 22.2398 17.574 22.75 15 22.75H9C6.42603 22.75 4.42914 22.2398 3.09467 20.9053C1.7602 19.5709 1.25 17.574 1.25 15V9C1.25 6.42603 1.7602 4.42914 3.09467 3.09467C4.42914 1.7602 6.42603 1.25 9 1.25H13.9941H14C14.0115 1.25 14.023 1.25026 14.0343 1.25077M14.75 6V3.81066L20.1893 9.25H18C16.5415 9.25 15.8079 8.99725 15.4053 8.59467C15.0028 8.19209 14.75 7.45845 14.75 6Z" fill="#1A1A1A" style={{ fill: "#494b74" }} />
    <path className="stroke" d="M7 13H13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path className="stroke" d="M7 17H11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export const HamburgerMenu = ({ onClickFunc }) => {
  return (
    <svg onClick={onClickFunc} style={{ width: "35px" }} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="12" fill="#FAFAFA" />
      <path d="M14 14H26" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 20H26" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 26H26" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const Arrow = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" height={"13px"} width={"13px"} viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
}

export const PencilIcon = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="#1A1A1A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke="#1A1A1A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export const MenuBulletRadio = ({ svgStyle = {}, pathStyle = {}, commonStyle = {}, customClass = "" }) => {
  return (
    <svg style={{ ...svgStyle, ...commonStyle }} className={customClass} viewBox="0 0 256 256" fill="#39D9A7" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><path style={{ ...pathStyle, ...commonStyle }} d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a64,64,0,1,1-64-64A64.1,64.1,0,0,1,192,128Z" /></svg>
  )
}

export const CircleIcon = ({ svgStyle = {}, pathStyle = {}, commonStyle = {}, customClass = "" }) => {
  return (
    <svg style={{ ...svgStyle, ...commonStyle }} className={customClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style={{ ...pathStyle, ...commonStyle }} d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
  )
}

export const HeaderSearchIcon = ({ svgStyle = {}, pathStyle = {} }) => {
  return <svg width="20" height="20" style={{ ...svgStyle }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path style={{ ...pathStyle }} d="M9.25134 15.9978C12.9787 15.9978 16.0002 12.9762 16.0002 9.2489C16.0002 5.52159 12.9787 2.5 9.25134 2.5C5.52403 2.5 2.50244 5.52159 2.50244 9.2489C2.50244 12.9762 5.52403 15.9978 9.25134 15.9978Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path style={{ ...pathStyle }} d="M15.1978 16.515C15.5952 17.7148 16.5026 17.8348 17.2 16.785C17.8374 15.8252 17.4174 15.0378 16.2626 15.0378C15.4078 15.0303 14.9278 15.6977 15.1978 16.515Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export const HeaderNotificationIcon = () => {
  return <div className="relative d-inline-block">
    <svg width="20" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6007 11.9633C14.9226 10.7969 14.5624 9.12266 14.5624 7.125C14.5624 5.38452 13.871 3.71532 12.6403 2.48461C11.4096 1.2539 9.74038 0.5625 7.9999 0.5625C6.25942 0.5625 4.59022 1.2539 3.35951 2.48461C2.1288 3.71532 1.4374 5.38452 1.4374 7.125C1.4374 9.12344 1.07881 10.7969 0.400681 11.9633C0.262307 12.2012 0.188958 12.4713 0.187998 12.7465C0.187038 13.0218 0.258501 13.2924 0.395212 13.5312C0.531058 13.7702 0.728231 13.9687 0.966374 14.106C1.20452 14.2433 1.475 14.3146 1.7499 14.3125H4.57646C4.65398 15.1669 5.04819 15.9614 5.68164 16.54C6.31509 17.1186 7.14199 17.4394 7.9999 17.4394C8.85781 17.4394 9.68471 17.1186 10.3182 16.54C10.9516 15.9614 11.3458 15.1669 11.4233 14.3125H14.2499C14.5244 14.3142 14.7944 14.2427 15.0321 14.1054C15.2698 13.9681 15.4666 13.7699 15.6022 13.5312C15.7395 13.2927 15.8117 13.0223 15.8114 12.7471C15.8111 12.4718 15.7385 12.2015 15.6007 11.9633ZM7.9999 15.5625C7.6397 15.5626 7.29053 15.4382 7.01149 15.2104C6.73246 14.9826 6.54069 14.6654 6.46865 14.3125H9.53115C9.45911 14.6654 9.26734 14.9826 8.98831 15.2104C8.70927 15.4382 8.3601 15.5626 7.9999 15.5625ZM2.27021 12.4375C2.96162 11.0312 3.3124 9.24531 3.3124 7.125C3.3124 5.8818 3.80626 4.68951 4.68534 3.81044C5.56441 2.93136 6.7567 2.4375 7.9999 2.4375C9.2431 2.4375 10.4354 2.93136 11.3145 3.81044C12.1935 4.68951 12.6874 5.8818 12.6874 7.125C12.6874 9.24453 13.0374 11.0312 13.7288 12.4375H2.27021Z" fill="#1A1A1A" />
    </svg>
  </div>
}



/*      TABLE ICONS      */
export const SystemManagements = () => {
  return (
    <span className="svg-icon svg-icon-primary svg-icon-2x">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect x={0} y={0} width={24} height={24} />
          <path
            d="M5,2 L19,2 C20.1045695,2 21,2.8954305 21,4 L21,6 C21,7.1045695 20.1045695,8 19,8 L5,8 C3.8954305,8 3,7.1045695 3,6 L3,4 C3,2.8954305 3.8954305,2 5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L16,6 C16.5522847,6 17,5.55228475 17,5 C17,4.44771525 16.5522847,4 16,4 L11,4 Z M7,6 C7.55228475,6 8,5.55228475 8,5 C8,4.44771525 7.55228475,4 7,4 C6.44771525,4 6,4.44771525 6,5 C6,5.55228475 6.44771525,6 7,6 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M5,9 L19,9 C20.1045695,9 21,9.8954305 21,11 L21,13 C21,14.1045695 20.1045695,15 19,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,11 C3,9.8954305 3.8954305,9 5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L11,11 Z M7,13 C7.55228475,13 8,12.5522847 8,12 C8,11.4477153 7.55228475,11 7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z"
            fill="currentColor"
          />
          <path
            d="M5,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,18 C3,16.8954305 3.8954305,16 5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 L11,18 Z M7,20 C7.55228475,20 8,19.5522847 8,19 C8,18.4477153 7.55228475,18 7,18 C6.44771525,18 6,18.4477153 6,19 C6,19.5522847 6.44771525,20 7,20 Z"
            fill="currentColor"
          />
        </g>
      </svg>
      {/*end::Svg Icon*/}
    </span>
  );
};


export const MakeActivate = () => {
  return (
    <span className="svg-icon svg-icon-md svg-icon-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24"></polygon>
          <path
            d="M9.26193932,16.6476484 C8.90425297,17.0684559 8.27315905,17.1196257 7.85235158,16.7619393 C7.43154411,16.404253 7.38037434,15.773159 7.73806068,15.3523516 L16.2380607,5.35235158 C16.6013618,4.92493855 17.2451015,4.87991302 17.6643638,5.25259068 L22.1643638,9.25259068 C22.5771466,9.6195087 22.6143273,10.2515811 22.2474093,10.6643638 C21.8804913,11.0771466 21.2484189,11.1143273 20.8356362,10.7474093 L17.0997854,7.42665306 L9.26193932,16.6476484 Z"
            fill="#000000"
            fillRule="nonzero"
            opacity="0.3"
            transform="translate(14.999995, 11.000002) rotate(-180.000000) translate(-14.999995, -11.000002) "
          ></path>
          <path
            d="M4.26193932,17.6476484 C3.90425297,18.0684559 3.27315905,18.1196257 2.85235158,17.7619393 C2.43154411,17.404253 2.38037434,16.773159 2.73806068,16.3523516 L11.2380607,6.35235158 C11.6013618,5.92493855 12.2451015,5.87991302 12.6643638,6.25259068 L17.1643638,10.2525907 C17.5771466,10.6195087 17.6143273,11.2515811 17.2474093,11.6643638 C16.8804913,12.0771466 16.2484189,12.1143273 15.8356362,11.7474093 L12.0997854,8.42665306 L4.26193932,17.6476484 Z"
            fill="#000000"
            fillRule="nonzero"
            transform="translate(9.999995, 12.000002) rotate(-180.000000) translate(-9.999995, -12.000002) "
          ></path>
        </g>
      </svg>
    </span>
  );
};

export const MakeDeactivate = () => {
  return (
    <span className="svg-icon svg-icon-md svg-icon-danger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
            fill="currentColor"
          >
            <rect x="0" y="7" width="16" height="2" rx="1"></rect>
            <rect
              opacity="0.3"
              transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) "
              x="0"
              y="7"
              width="16"
              height="2"
              rx="1"
            ></rect>
          </g>
        </g>
      </svg>
    </span>
  );
};

export const ChangePassword = () => {
  return (
    <span className="svg-icon svg-icon-md svg-icon-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-person"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
      </svg>
    </span>
  );
};


export const SendCreds = () => {
  return (
    <span className="svg-icon svg-icon-primary svg-icon-2x">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect x="0" y="0" width="24" height="24"></rect>
          <path
            d="M14,13.381038 L14,3.47213595 L7.99460483,15.4829263 L14,13.381038 Z M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z"
            fill="currentColor"
            fillRule="nonzero"
            transform="translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) "
          ></path>
        </g>
      </svg>
    </span>
  );
};


export const SubTask = () => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect className="rect" x="16" y="9" width="4" height="4" rx="2" transform="rotate(90 16 9)" fill="#3699FF" stroke="#3699FF" strokeWidth="2" />
        <rect className="rect" x="20" y="17" width="4" height="4" rx="2" transform="rotate(90 20 17)" fill="#3699FF" stroke="#3699FF" strokeWidth="2" />
        <path className="path" d="M5 4V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H16" stroke="#3699FF" strokeWidth="2" />
        <path className="path" d="M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H12" stroke="#3699FF" strokeWidth="2" />
      </g>
    </svg>
  )
}

export const View = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
        <path
          d="M12.8434797,16 L11.1565203,16 L10.9852159,16.6393167 C10.3352654,19.064965 7.84199997,20.5044524 5.41635172,19.8545019 C2.99070348,19.2045514 1.55121603,16.711286 2.20116652,14.2856378 L3.92086709,7.86762789 C4.57081758,5.44197964 7.06408298,4.00249219 9.48973122,4.65244268 C10.5421727,4.93444352 11.4089671,5.56345262 12,6.38338695 C12.5910329,5.56345262 13.4578273,4.93444352 14.5102688,4.65244268 C16.935917,4.00249219 19.4291824,5.44197964 20.0791329,7.86762789 L21.7988335,14.2856378 C22.448784,16.711286 21.0092965,19.2045514 18.5836483,19.8545019 C16.158,20.5044524 13.6647346,19.064965 13.0147841,16.6393167 L12.8434797,16 Z M17.4563502,18.1051865 C18.9630797,18.1051865 20.1845253,16.8377967 20.1845253,15.2743923 C20.1845253,13.7109878 18.9630797,12.4435981 17.4563502,12.4435981 C15.9496207,12.4435981 14.7281751,13.7109878 14.7281751,15.2743923 C14.7281751,16.8377967 15.9496207,18.1051865 17.4563502,18.1051865 Z M6.54364977,18.1051865 C8.05037928,18.1051865 9.27182488,16.8377967 9.27182488,15.2743923 C9.27182488,13.7109878 8.05037928,12.4435981 6.54364977,12.4435981 C5.03692026,12.4435981 3.81547465,13.7109878 3.81547465,15.2743923 C3.81547465,16.8377967 5.03692026,18.1051865 6.54364977,18.1051865 Z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};


export const Edit = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
        <path
          d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
          fill="#000000"
          opacity="0.3"
        />
        <path
          d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
          fill="#000000"
        />
      </g>
    </svg>
  );
};

export const Delete = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
        <path
          d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
          fill="#000000"
          fillRule="nonzero"
        />
        <path
          d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
          fill="#000000"
          opacity="0.3"
        />
      </g>
    </svg>
  );
};

export const CustomerManagement = () => {
  return (
    <span className="svg-icon svg-icon-primary svg-icon-2x">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon points="0 0 24 0 24 24 0 24" />
          <path
            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
            fill="currentColor"
            fillRule="nonzero"
            opacity="0.3"
          />
          <path
            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </g>
      </svg>
      {/*end::Svg Icon*/}
    </span>
  );
};

export const HorizontalArrow = ({ dir, svgStyle }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={"18px"} width={"18px"} style={{ transform: dir == 'right' ? `rotate(0deg)` : `rotate(180deg)`, ...svgStyle }}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
}

export const VerticalArrow = ({ dir, svgStyle }) => {
  return <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: dir == 'top' ? `rotate(180deg)` : `rotate(0deg)`, ...svgStyle }}>
    <path d="M13.6774 0.622546C13.4878 0.418662 13.2209 0.302734 12.9412 0.302734C12.6616 0.302734 12.3947 0.418656 12.205 0.622546L7.00621 5.78774L1.77744 0.622546C1.51444 0.361669 1.13102 0.259836 0.771729 0.355326C0.412356 0.450803 0.131706 0.729097 0.035511 1.08538C-0.0607723 1.44167 0.0419142 1.82186 0.304986 2.08268L6.25502 7.98292C6.44462 8.18681 6.71161 8.30273 6.99124 8.30273C7.27087 8.30273 7.53786 8.18681 7.72746 7.98292L13.6775 2.08268C13.8831 1.89467 14 1.62991 14 1.35262C14 1.07525 13.883 0.810551 13.6774 0.622546Z" fill="#1A1A1A" />
  </svg>

}

export const CheckIcon = () => {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="-0.5" y="0.5" width="21" height="21" rx="10.5" transform="matrix(-1 0 0 1 21 0)" fill="white" stroke="white"/>
  <path d="M15.7993 7.42048C16.0317 7.65282 16.0317 8.02951 15.7993 8.26184L9.60802 14.4531C9.306 14.7552 8.81633 14.7552 8.51431 14.4531L6.20087 12.1397C5.96844 11.9073 5.96845 11.5305 6.20087 11.298C6.43309 11.0658 6.80953 11.0656 7.04203 11.2975L8.65466 12.9062C8.87928 13.1303 9.24291 13.1301 9.46736 12.9059L14.9582 7.42028C15.1905 7.18814 15.5671 7.18822 15.7993 7.42048Z" fill="#39D9A7"/>
  </svg>
}

export const FilterIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={"18px"} width={"18px"}><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" /></svg>
}

export const PlusIcon = ({ svgStyle = {}, pathStyle = {} }) => {
  return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ ...svgStyle }}>
    <path d="M17.1668 10.8335H11.3335V16.6668H9.66683V10.8335H3.8335V9.16683H9.66683V3.3335H11.3335V9.16683H17.1668V10.8335Z" fill="white" style={{ ...pathStyle }} />
  </svg>

}

export const SwapIcon = () => {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6 11.58V14.31C13.6 16.59 12.69 17.5 10.41 17.5H7.69C5.42 17.5 4.5 16.59 4.5 14.31V11.58C4.5 9.31002 5.41 8.40002 7.69 8.40002H10.42C12.69 8.40002 13.6 9.31002 13.6 11.58Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.4999 7.68V10.41C17.4999 12.69 16.5899 13.6 14.3099 13.6H13.5999V11.58C13.5999 9.31 12.6899 8.4 10.4099 8.4H8.3999V7.68C8.3999 5.4 9.3099 4.5 11.5899 4.5H14.3199C16.5899 4.5 17.4999 5.41 17.4999 7.68Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export const RoleIcon = () => {
  return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="12" fill="#E8E9EB" />
    <path d="M13.8364 24.8462C13.8364 25.3962 14.2864 25.8462 14.8364 25.8462C15.3864 25.8462 15.8364 25.3962 15.8364 24.8462C15.8364 24.2962 15.3864 23.8462 14.8364 23.8462C14.2864 23.8462 13.8364 24.2962 13.8364 24.8462Z" fill="#1A1A1A" />
    <rect x="18.8364" y="24.0962" width="7.3271" height="1.5" rx="0.75" fill="#1A1A1A" />
    <path d="M13.8364 15.1543C13.8364 15.7043 14.2864 16.1543 14.8364 16.1543C15.3864 16.1543 15.8364 15.7043 15.8364 15.1543C15.8364 14.6043 15.3864 14.1543 14.8364 14.1543C14.2864 14.1543 13.8364 14.6043 13.8364 15.1543Z" fill="#1A1A1A" />
    <rect x="18.8364" y="14.4043" width="7.3271" height="1.5" rx="0.75" fill="#1A1A1A" />
    <path d="M13.8364 20C13.8364 20.55 14.2864 21 14.8364 21C15.3864 21 15.8364 20.55 15.8364 20C15.8364 19.45 15.3864 19 14.8364 19C14.2864 19 13.8364 19.45 13.8364 20Z" fill="#1A1A1A" />
    <rect x="18.8364" y="19.25" width="7.3271" height="1.5" rx="0.75" fill="#1A1A1A" />
    <path d="M17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17V23C10 28 12 30 17 30Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}