import * as React from "react";

export const EmailTemplate = ({ messageData, name, email }) => (
  <table
    width="100%"
    cellPadding="0"
    cellSpacing="0"
    style={{
      padding: "30px 10px",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    <tr>
      <td align="center">
        <table
          width="600"
          cellPadding="0"
          cellSpacing="0"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >

          <tr>
            <td
              style={{
                backgroundColor: "#075985",
                height: "6px",
                borderRadius: "8px 8px 0 0",
              }}
            />
          </tr>


          <tr>
            <td style={{ padding: "24px 24px 10px 24px" }}>
              <h3
                style={{
                  margin: "0",
                  color: "#111827",
                  fontWeight: "normal",
                }}
              >
                New message received
              </h3>
            </td>
          </tr>


          <tr>
            <td style={{ padding: "16px 24px" }}>
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              >
                <tr>
                  <td style={{ padding: "16px", color: "#374151" }}>
                    <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
                      <strong>{name}</strong> wrote:
                    </p>

                    <p
                      style={{
                        margin: "0",
                        lineHeight: "1.6",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {messageData}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "0 24px 24px 24px" }}>
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td
                    style={{
                      fontSize: "14px",
                      color: "#6b7280",
                    }}
                  >
                    <strong>Email:</strong> {email}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                padding: "16px",
                textAlign: "center",
                fontSize: "12px",
                color: "#9ca3af",
                borderTop: "1px solid #e5e7eb",
              }}
            >
              © 2025 Avnish Kumar. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
);

export const EmailTemplate2 = ({ name }) => (
  <table
    width="100%"
    cellPadding="0"
    cellSpacing="0"
    style={{
      padding: "20px",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    <tr>
      <td align="center">
        <table
          width="600"
          cellPadding="0"
          cellSpacing="0"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
          }}
        >
  
          <tr>
            <td
              style={{
                padding: "20px",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  color: "#075985",
                  fontWeight: "normal",
                }}
              >
                We’ve received your message
              </h3>
            </td>
          </tr>

          <tr>
            <td style={{ padding: "20px", color: "#333333" }}>
              <p style={{ margin: "0 0 14px 0" }}>
                Dear {name},
              </p>

              <p style={{ margin: "0 0 14px 0", lineHeight: "1.6" }}>
                Thank you for reaching out. This is just a quick note to let you
                know that your message has been received safely.
              </p>

              <p style={{ margin: "0 0 14px 0", lineHeight: "1.6" }}>
                I truly appreciate you taking the time to write. I will review
                your message and get back to you as soon as possible.
              </p>

              <p style={{ margin: "20px 0 0 0" }}>
                Warm regards,<br />
                Avnish Kumar
              </p>
            </td>
          </tr>

          <tr>
            <td
              style={{
                padding: "15px",
                textAlign: "center",
                fontSize: "12px",
                color: "#777777",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              © 2025 Avnish Kumar. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
);
