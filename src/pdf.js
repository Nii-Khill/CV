import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPDF = () => {
const cv = document.querySelector(".cv-right");
  const downloadBtn = document.querySelector(".download-btn");

  // hide button
  downloadBtn.style.display = "none";

  html2canvas(cv, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("My_CV.pdf");

    // show button back
    downloadBtn.style.display = "block";
  });
};
