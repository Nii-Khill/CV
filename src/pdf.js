import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPDF = () => {
  const resume = document.querySelector(".resume-container");
  const downloadBtn = document.querySelector(".download-btn");

  // Hide button before capture
  downloadBtn.style.visibility = "hidden";

  html2canvas(resume, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#ffffff"
  })
    .then(canvas => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Convert image ratio for best fit
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add additional pages if resume is long
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("My_CV.pdf");
    })
    .finally(() => {
      downloadBtn.style.visibility = "visible";
    });
};
