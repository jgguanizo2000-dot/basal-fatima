function goToPage(num) {
  const pages = {
    1: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style1/shiba1.html",
    2: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style2/shiba2.html",
    3: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style3/shiba3.html",
    4: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style4/shiba4.html",
    5: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style5/shiba5.html",
    6: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style6/shiba6.html",
    7: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style7/shiba7.html",
    8: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style8/shiba8.html",
    9: "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/FATIMA/shiba_style9/shiba9.html"
  };
  window.location.href = pages[num];
}